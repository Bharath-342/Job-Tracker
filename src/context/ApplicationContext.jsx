import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [applications, setApplications] = useState([]);

  // Load user specific data
  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(`applications_${user.email}`);
      setApplications(stored ? JSON.parse(stored) : []);
    }
  }, [user]);

  // Save user specific data
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `applications_${user.email}`,
        JSON.stringify(applications)
      );
    }
  }, [applications, user]);

  const addApplication = (application) => {
    setApplications((prev) => [...prev, application]);
  };

  const updateApplicationStatus = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const deleteApplication = (id) => {
    setApplications((prev) =>
      prev.filter((app) => app.id !== id)
    );
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        updateApplicationStatus,
        deleteApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}