export const calculateStats = (applications) => {
  const total = applications.length;

  const interview = applications.filter(
    (app) => app.status === "interview"
  ).length;

  const offer = applications.filter(
    (app) => app.status === "offer"
  ).length;

  const rejected = applications.filter(
    (app) => app.status === "rejected"
  ).length;

  const interviewRate = total ? ((interview / total) * 100).toFixed(1) : 0;
  const offerRate = total ? ((offer / total) * 100).toFixed(1) : 0;
  const rejectionRate = total ? ((rejected / total) * 100).toFixed(1) : 0;

  return {
    total,
    interview,
    offer,
    rejected,
    interviewRate,
    offerRate,
    rejectionRate,
  };
};