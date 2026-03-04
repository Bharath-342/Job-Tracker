import { useState, useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import { companies } from "../../utils/companies";
import { roles } from "../../utils/roles";

function ApplicationForm() {
  const { addApplication } = useContext(ApplicationContext);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    experience: "Fresher",
  });

  const [companySuggestions, setCompanySuggestions] = useState([]);
  const [roleSuggestions, setRoleSuggestions] = useState([]);

  const experienceOptions = [
    "Fresher",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "10+ years",
  ];

  // 🔹 Company Filtering (startsWith, max 10)
  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, company: value }));

    if (!value) {
      setCompanySuggestions([]);
      return;
    }

    const filtered = companies
      .filter((c) =>
        c.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 10);

    setCompanySuggestions(filtered);
  };

  // 🔹 Role Filtering (startsWith, max 10)
  const handleRoleChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, role: value }));

    if (!value) {
      setRoleSuggestions([]);
      return;
    }

    const filtered = roles
      .filter((r) =>
        r.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 10);

    setRoleSuggestions(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.company || !formData.role) {
      alert("Company and Role are required");
      return;
    }

    const newApplication = {
      id: Date.now(),
      ...formData,
      status: "applied",
      appliedDate: new Date().toISOString(),
    };

    addApplication(newApplication);

    setFormData({
      company: "",
      role: "",
      experience: "Fresher",
    });

    setCompanySuggestions([]);
    setRoleSuggestions([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "20px",
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
      }}
    >
      {/* Company Input */}
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleCompanyChange}
        />

        {companySuggestions.length > 0 && (
          <div
            style={{
              position: "absolute",
              background: "white",
              border: "1px solid #ccc",
              width: "100%",
              zIndex: 10,
            }}
          >
            {companySuggestions.map((c) => (
              <div
                key={c}
                style={{ padding: "5px", cursor: "pointer" }}
                onClick={() => {
                  setFormData((prev) => ({ ...prev, company: c }));
                  setCompanySuggestions([]);
                }}
              >
                {c}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Role Input */}
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Role"
          value={formData.role}
          onChange={handleRoleChange}
        />

        {roleSuggestions.length > 0 && (
          <div
            style={{
              position: "absolute",
              background: "white",
              border: "1px solid #ccc",
              width: "100%",
              zIndex: 10,
            }}
          >
            {roleSuggestions.map((r) => (
              <div
                key={r}
                style={{ padding: "5px", cursor: "pointer" }}
                onClick={() => {
                  setFormData((prev) => ({ ...prev, role: r }));
                  setRoleSuggestions([]);
                }}
              >
                {r}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Experience Dropdown */}
      <select
        value={formData.experience}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            experience: e.target.value,
          }))
        }
      >
        {experienceOptions.map((exp) => (
          <option key={exp} value={exp}>
            {exp}
          </option>
        ))}
      </select>

      <button type="submit">Apply</button>
    </form>
  );
}

export default ApplicationForm;