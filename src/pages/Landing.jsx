import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 bg-gradient-to-br from-indigo-100 via-white to-purple-100">

      {/* BACKGROUND GLOW BLOBS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-400 opacity-30 blur-3xl rounded-full"></div>

      <div className="absolute top-40 right-[-120px] w-[450px] h-[450px] bg-purple-400 opacity-30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] left-40 w-[450px] h-[450px] bg-pink-400 opacity-20 blur-3xl rounded-full"></div>


      {/* APP NAME */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide"
      >
        Job Tracker
      </motion.h1>


      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >

          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Organize Your
            <span className="text-indigo-600"> Job Search</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Track job applications using a visual Kanban workflow.
            Move applications through stages, analyze your interview
            pipeline, and manage opportunities efficiently.
          </p>

          {/* LOGIN BUTTON (UNCHANGED) */}
          <button
            onClick={() => navigate("/login")}
            className="mt-10 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Login
          </button>

        </motion.div>


        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* ORBITING ANALYTICS */}
          <motion.div
            
            className="absolute w-[520px] h-[520px]"
          >

            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                className="w-28 rounded-xl shadow-xl border bg-white"
              />
            </div>

            <div className="absolute bottom-16 left-0">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
                className="w-28 rounded-xl shadow-xl border bg-white"
              />
            </div>

            <div className="absolute bottom-16 right-0">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
                className="w-28 rounded-xl shadow-xl border bg-white"
              />
            </div>

          </motion.div>


          {/* KANBAN BOARD */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 grid grid-cols-3 gap-4">

            <div className="bg-slate-100 rounded-xl p-4">
              <h3 className="font-semibold text-slate-700 mb-3">Applied</h3>

              <div className="bg-white p-3 rounded-lg shadow mb-2">
                Google
              </div>

              <div className="bg-white p-3 rounded-lg shadow">
                Amazon
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-4">
              <h3 className="font-semibold text-slate-700 mb-3">Interview</h3>

              <div className="bg-white p-3 rounded-lg shadow mb-2">
                Microsoft
              </div>

              <div className="bg-white p-3 rounded-lg shadow">
                Atlassian
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-4">
              <h3 className="font-semibold text-slate-700 mb-3">Offer</h3>

              <div className="bg-white p-3 rounded-lg shadow">
                Stripe
              </div>
            </div>

          </div>


          {/* FLOATING STATS */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-10 -left-10 bg-white shadow-xl rounded-xl px-6 py-4"
          >
            <p className="text-sm text-slate-500">Applications</p>
            <p className="text-xl font-bold text-indigo-600">42 Tracked</p>
          </motion.div>


          {/* SUCCESS RATE */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-10 -right-10 bg-white shadow-xl rounded-xl px-6 py-4"
          >
            <p className="text-sm text-slate-500">Success Rate</p>
            <p className="text-xl font-bold text-green-600">26%</p>
          </motion.div>

        </motion.div>

      </div>

    </div>
  );
}

export default Landing;