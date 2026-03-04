
import { motion } from "framer-motion";
import Card from "../card/Card";

function Column({ status, applications = [] }) {
  const statusConfig = {
    applied: {
      label: "Applied",
      badge: "bg-blue-100 text-blue-600",
    },
    interview: {
      label: "Interview",
      badge: "bg-yellow-100 text-yellow-600",
    },
    offer: {
      label: "Offer",
      badge: "bg-emerald-100 text-emerald-600",
    },
    rejected: {
      label: "Rejected",
      badge: "bg-red-100 text-red-600",
    },
  };

  const config = statusConfig[status];

  return (
    <motion.div
      layout
      className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-inner"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
          {config.label}
        </h3>

        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${config.badge}`}
        >
          {applications.length}
        </span>
      </div>

      {/* Cards */}
      <motion.div layout className="space-y-4">
        {applications.length > 0 ? (
          applications.map((app) => (
            <Card
              key={app.id || app.company + app.role}
              application={app}
            />
          ))
        ) : (
          <div className="text-xs text-slate-400 italic">
            No applications
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Column;