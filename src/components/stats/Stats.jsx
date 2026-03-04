import { useContext, useMemo } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import { calculateStats } from "../../utils/analytics";

function Stats() {
  const { applications } = useContext(ApplicationContext);

  const stats = useMemo(() => {
    return calculateStats(applications);
  }, [applications]);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap",
      }}
    >
      <StatCard title="Total Applications" value={stats.total} />
      <StatCard title="Interviews" value={stats.interview} />
      <StatCard title="Offers" value={stats.offer} />
      <StatCard title="Rejected" value={stats.rejected} />
      <StatCard title="Interview Rate (%)" value={stats.interviewRate} />
      <StatCard title="Offer Rate (%)" value={stats.offerRate} />
      <StatCard title="Rejection Rate (%)" value={stats.rejectionRate} />
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        minWidth: "180px",
      }}
    >
      <h4>{title}</h4>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}

export default Stats;