import { useState, useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import { companies } from "../../data/companies";
import { roles } from "../../data/roles";

function ApplyForm() {
  const { addApplication } = useContext(ApplicationContext);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    experience: "",
  });

  const [companySuggestions, setCompanySuggestions] = useState([]);
  const [roleSuggestions, setRoleSuggestions] = useState([]);

  // Company search
  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, company: value });

    const filtered = companies.filter((c) =>
      c.toLowerCase().startsWith(value.toLowerCase())
    );

    setCompanySuggestions(value ? filtered : []);
  };

  // Role search
  const handleRoleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, role: value });

    const filtered = roles.filter((r) =>
      r.toLowerCase().startsWith(value.toLowerCase())
    );

    setRoleSuggestions(value ? filtered : []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.company || !formData.role || !formData.experience) {
      alert("All fields required");
      return;
    }

    addApplication({
      id: Date.now(),
      ...formData,
      status: "applied",
      appliedDate: new Date(),
    });

    setFormData({
      company: "",
      role: "",
      experience: "",
    });

    setCompanySuggestions([]);
    setRoleSuggestions([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 mb-10">
      <h2 className="text-lg font-semibold mb-5 text-slate-800">
        Apply New Job
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6">

        {/* Company */}
        <div className="relative">
          <input
            type="text"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleCompanyChange}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {companySuggestions.length > 0 && (
            <ul className="absolute bg-white border border-slate-200 w-full mt-1 rounded-lg shadow-md max-h-40 overflow-y-auto z-10">
              {companySuggestions.map((c, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setFormData({ ...formData, company: c });
                    setCompanySuggestions([]);
                  }}
                  className="px-3 py-2 hover:bg-indigo-50 cursor-pointer text-sm"
                >
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Role */}
        <div className="relative">
          <input
            type="text"
            placeholder="Job Role"
            value={formData.role}
            onChange={handleRoleChange}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {roleSuggestions.length > 0 && (
            <ul className="absolute bg-white border border-slate-200 w-full mt-1 rounded-lg shadow-md max-h-40 overflow-y-auto z-10">
              {roleSuggestions.map((r, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setFormData({ ...formData, role: r });
                    setRoleSuggestions([]);
                  }}
                  className="px-3 py-2 hover:bg-indigo-50 cursor-pointer text-sm"
                >
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Experience */}
        <div>
          <select
            value={formData.experience}
            onChange={(e) =>
              setFormData({ ...formData, experience: e.target.value })
            }
            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Experience</option>
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={`${num + 1} years`}>
                {num + 1} years
              </option>
            ))}
            <option value="10+ years">10+ years</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition transform duration-200"
        >
          Apply Job
        </button>
      </form>
    </div>
  );
}

export default ApplyForm;