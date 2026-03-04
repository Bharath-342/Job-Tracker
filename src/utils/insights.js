// ---------------- STATUS CHART INSIGHT ----------------
export const generateStatusInsight = (item, applications) => {
  const total = applications.length;
  const value = item.value;
  const percentage = total ? ((value / total) * 100).toFixed(1) : 0;

  let performanceLevel = "Healthy";
  let weakness = "";
  let improvement = "";

  if (item.name === "rejected" && percentage > 50) {
    performanceLevel = "Critical";
    weakness = "High rejection ratio indicates mismatch or weak resume targeting.";
    improvement =
      "Customize resume for each role, focus on relevant tech stack, avoid mass applying.";
  } else if (item.name === "interview" && percentage < 10) {
    performanceLevel = "Weak Conversion";
    weakness =
      "Low screening success suggests resume not passing ATS filters.";
    improvement =
      "Improve keyword optimization and measurable achievements in resume.";
  } else {
    weakness = "This stage distribution appears stable.";
    improvement = "Maintain structured and focused application strategy.";
  }

  return {
    title: "Pipeline Stage Analysis",
    metric: `${percentage}% of applications are in '${item.name}' stage.`,
    performanceLevel,
    weakness,
    improvement,
  };
};

// ---------------- MONTHLY CHART INSIGHT ----------------
export const generateMonthlyInsight = (item) => {
  let consistency = "Good";
  let issue = "";
  let action = "";

  if (item.count < 3) {
    consistency = "Inconsistent";
    issue =
      "Low monthly activity reduces exposure and probability of interviews.";
    action = "Set weekly target of 5–10 applications.";
  } else if (item.count < 8) {
    consistency = "Moderate";
    issue = "Application volume could be improved.";
    action = "Increase structured daily application time.";
  } else {
    issue = "Strong activity level maintained.";
    action = "Keep tracking and optimizing success rate.";
  }

  return {
    title: "Application Consistency Analysis",
    metric: `You applied ${item.count} jobs in ${item.month}.`,
    consistency,
    issue,
    action,
  };
};

// ---------------- FUNNEL CHART INSIGHT ----------------
export const generateFunnelInsight = (item, applications) => {
  const total = applications.length;
  const rate = total ? ((item.count / total) * 100).toFixed(1) : 0;

  let bottleneck = "None";
  let solution = "";

  if (item.stage === "offer" && item.count === 0) {
    bottleneck = "Interview-to-Offer Drop-off";
    solution =
      "Practice mock interviews, strengthen system design and behavioral responses.";
  } else if (item.stage === "interview" && rate < 15) {
    bottleneck = "Screening Bottleneck";
    solution =
      "Improve resume keywords and align applications with required skills.";
  } else {
    solution = "Pipeline transition appears stable.";
  }

  return {
    title: "Conversion Funnel Analysis",
    metric: `${item.count} applications reached '${item.stage}' stage.`,
    rate: `${rate}% conversion from total applications.`,
    bottleneck,
    solution,
  };
};

// ---------------- EXPERIENCE CHART INSIGHT ----------------
export const generateExperienceInsight = (item, applications) => {
  const total = applications.length;
  const percentage = total
    ? ((item.count / total) * 100).toFixed(1)
    : 0;

  let alignment = "Aligned";
  let correction = "";

  if (item.experience === "10+ years" && percentage > 30) {
    alignment = "Misaligned Targeting";
    correction =
      "Reduce applications to senior roles and focus on fresher/0–2 years roles.";
  } else if (item.experience === "Fresher" && percentage < 10) {
    alignment = "Under-targeting Entry Roles";
    correction =
      "Increase applications to fresher roles to improve selection probability.";
  } else {
    correction = "Experience targeting seems reasonable.";
  }

  return {
    title: "Experience Targeting Analysis",
    metric: `${percentage}% of applications are for '${item.experience}' level.`,
    alignment,
    correction,
  };
};