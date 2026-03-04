import { motion } from "framer-motion";

function AnimatedBackground({ type = "gradient" }) {

  if (type === "blobs") {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 120, -120, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] bg-indigo-300 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]"
        />

        <motion.div
          animate={{ x: [0, -150, 150, 0], y: [0, 120, -120, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute w-[450px] h-[450px] bg-purple-300 rounded-full blur-3xl opacity-30 bottom-[-100px] right-[-100px]"
        />
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="w-full h-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 bg-[length:200%_200%]"
      />
    </div>
  );
}

export default AnimatedBackground;