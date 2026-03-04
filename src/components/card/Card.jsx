import { motion } from "framer-motion";
import { useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";

function Card({ application }) {
  const { updateApplicationStatus, deleteApplication } =
    useContext(ApplicationContext);

  const statusFlow = {
    applied: ["interview", "rejected"],
    interview: ["offer", "rejected"],
    offer: [],
    rejected: [],
  };

  const nextStatuses = statusFlow[application.status] || [];

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-200"
    >
      {/* Company */}
      <h4 className="text-base font-semibold text-slate-800">
        {application.company}
      </h4>

      {/* Role */}
      <p className="text-sm text-slate-500 mt-1">
        {application.role}
      </p>

      {/* Experience Badge */}
      <div className="mt-3 inline-block bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
        {application.experience}
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center justify-between">
        {/* Status Options */}
        {nextStatuses.length > 0 ? (
          <select
            onChange={(e) =>
              updateApplicationStatus(application.id, e.target.value)
            }
            defaultValue=""
            className="text-xs border border-slate-300 rounded-lg px-3 py-1 bg-white hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="" disabled>
              Move to...
            </option>
            {nextStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        ) : (
          <span className="text-xs text-slate-400 italic">
            Final Status
          </span>
        )}

        {/* Delete */}
        <button
          onClick={() => deleteApplication(application.id)}
          className="text-xs text-red-500 hover:text-red-600 font-medium"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}

export default Card;