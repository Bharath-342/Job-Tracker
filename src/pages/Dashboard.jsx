import { useContext, useMemo } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import Board from "../components/board/Board";
import ApplyForm from "../components/form/ApplyForm";
import AnimatedBackground from "../components/ui/AnimatedBackground";

function Dashboard() {

  const { applications } = useContext(ApplicationContext);

  const stats = useMemo(() => {

    const total = applications.length;

    const applied = applications.filter(a => a.status === "applied").length;
    const interview = applications.filter(a => a.status === "interview").length;
    const offer = applications.filter(a => a.status === "offer").length;
    const rejected = applications.filter(a => a.status === "rejected").length;

    const successRate =
      total > 0 ? ((offer / total) * 100).toFixed(1) : 0;

    return { total, applied, interview, offer, rejected, successRate };

  }, [applications]);

  const exportCSV = () => {

    if (!applications.length) return;

    const headers = ["Company", "Role", "Experience", "Status"];

    const rows = applications.map(app => [
      app.company,
      app.role,
      app.experience,
      app.status
    ]);

    const csvContent =
      [headers, ...rows]
        .map(row => row.join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "job-applications.csv";
    a.click();
  };

  return (
    <div className="min-h-screen relative overflow-hidden
    bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900
    p-8">

      <AnimatedBackground type="blobs" />

      {/* overlay blur layer */}
      <div className="absolute inset-0 backdrop-blur-[120px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">

          <h1 className="text-3xl md:text-4xl font-bold
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent">
            Job Application Dashboard
          </h1>

          <button
            onClick={exportCSV}
            className="px-6 py-3 rounded-xl font-semibold
            text-white
            bg-gradient-to-r from-emerald-500 to-green-600
            shadow-lg shadow-emerald-500/30
            hover:scale-105 hover:shadow-xl
            transition-all duration-300"
          >
            Export Applications
          </button>

        </div>

        <ApplyForm />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">

          <StatCard label="Total" value={stats.total} />
          <StatCard label="Applied" value={stats.applied} />
          <StatCard label="Interview" value={stats.interview} />
          <StatCard label="Offer" value={stats.offer} />
          <StatCard label="Rejected" value={stats.rejected} />
          <StatCard label="Success %" value={`${stats.successRate}%`} />

        </div>

        <Board applications={applications} />

      </div>
    </div>
  );
}

function StatCard({ label, value }) {

  const styles = {
    Total: "from-slate-500 to-slate-700 border-slate-400/40 shadow-slate-500/30",
    Applied: "from-blue-500 to-cyan-500 border-blue-400/40 shadow-blue-500/30",
    Interview: "from-purple-500 to-fuchsia-500 border-purple-400/40 shadow-purple-500/30",
    Offer: "from-emerald-500 to-green-500 border-emerald-400/40 shadow-emerald-500/30",
    Rejected: "from-rose-500 to-red-500 border-rose-400/40 shadow-rose-500/30",
    "Success %": "from-yellow-400 to-orange-500 border-yellow-300/40 shadow-yellow-400/30"
  };

  const style = styles[label] || styles.Total;

  return (
    <div
      key={value}
      className={`
      relative overflow-hidden
      bg-white/20 backdrop-blur-xl
      border ${style.split(" ")[2]}
      rounded-2xl p-6
      text-center
      shadow-lg ${style.split(" ")[3]}
      transition-all duration-500
      animate-[pulse_0.6s_ease]
      `}
    >

      {/* gradient glow layer */}
      <div
        className={`
        absolute inset-0 opacity-25
        bg-gradient-to-br ${style.split(" ")[0]} ${style.split(" ")[1]}
        `}
      ></div>

      <p className="relative text-xs text-gray-200 uppercase tracking-widest">
        {label}
      </p>

      <p
        className={`
        relative text-3xl font-bold mt-2
        bg-gradient-to-r ${style.split(" ")[0]} ${style.split(" ")[1]}
        bg-clip-text text-transparent
        `}
      >
        {value}
      </p>

    </div>
  );
}
export default Dashboard;