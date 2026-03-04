import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/ui/AnimatedBackground";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-slate-50 flex flex-col items-center justify-center text-center px-6 z-10">

      <AnimatedBackground type="blobs" />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-slate-800"
      >
        Job Tracker
      </motion.h1>

      <p className="mt-6 text-lg text-slate-600 max-w-xl">
        Track your job applications efficiently. Organize companies,
        manage interview pipelines, and analyze your success rate
        with powerful visual analytics.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="mt-10 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
      >
        Login
      </button>

    </div>
  );
}

export default Landing;