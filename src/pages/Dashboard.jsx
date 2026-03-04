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
    <div className="min-h-screen relative p-8 z-10">

      <AnimatedBackground type="blobs" />

      <div className="max-w-7xl mx-auto">

        {/* Export Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={exportCSV}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Export Applications
          </button>
        </div>

        <ApplyForm />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">

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
  return (
    <div className="bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-2xl p-5 text-center transition transform hover:-translate-y-1 hover:shadow-2xl">
      <p className="text-xs text-slate-500 uppercase tracking-wider">
        {label}
      </p>
      <p className="text-2xl font-bold text-slate-800 mt-2">
        {value}
      </p>
    </div>
  );
}
export default Dashboard;