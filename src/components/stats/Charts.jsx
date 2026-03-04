import { useContext, useState } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
  Legend
} from "recharts";

function Charts() {

  const { applications } = useContext(ApplicationContext);

  const [openChart, setOpenChart] = useState(null);

  const [statusInsight, setStatusInsight] = useState(false);
  const [monthlyInsight, setMonthlyInsight] = useState(false);
  const [funnelInsight, setFunnelInsight] = useState(false);
  const [experienceInsight, setExperienceInsight] = useState(false);

  const applied = applications.filter(a => a.status === "applied").length;
  const interview = applications.filter(a => a.status === "interview").length;
  const offer = applications.filter(a => a.status === "offer").length;
  const rejected = applications.filter(a => a.status === "rejected").length;

  const statusData = [
    { name: "Applied", value: applied },
    { name: "Interview", value: interview },
    { name: "Offer", value: offer },
    { name: "Rejected", value: rejected }
  ];

  const monthlyData = [
    { month: "Applications", count: applications.length }
  ];

  const funnelData = [
    { name: "Applied", value: applied },
    { name: "Interview", value: interview },
    { name: "Offer", value: offer }
  ];

  const experienceData = [
    { name: "Experience", value: applications.length }
  ];

  const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

      {/* STATUS DISTRIBUTION */}

      <div className="bg-white/70 backdrop-blur-lg border shadow-xl rounded-2xl p-6">

        <h2 className="text-lg font-semibold mb-3">Status Distribution</h2>

        <ul className="text-sm text-slate-600 mb-4 space-y-1">
          <li>• Breakdown of application stages</li>
          <li>• Measures resume effectiveness</li>
          <li>• Tracks rejection ratio</li>
          <li>• Shows pipeline health</li>
          <li>• Identifies conversion gaps</li>
        </ul>

        {openChart === "status" ? (
          <>
            <div className="h-[260px]">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={statusData}
                    dataKey="value"
                    outerRadius={90}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </div>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() => setStatusInsight(!statusInsight)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                Show Insight
              </button>

              <button
                onClick={() => setOpenChart(null)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
              >
                Close Chart
              </button>

            </div>

            {statusInsight && (
              <p className="mt-3 text-sm text-slate-600">
                High applied but low interview count means your resume may not be matching job requirements.
              </p>
            )}

          </>
        ) : (
          <button
            onClick={() => setOpenChart("status")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl"
          >
            Open Chart
          </button>
        )}

      </div>


      {/* MONTHLY APPLICATIONS */}

      <div className="bg-white/70 backdrop-blur-lg border shadow-xl rounded-2xl p-6">

        <h2 className="text-lg font-semibold mb-3">Monthly Applications</h2>

        <ul className="text-sm text-slate-600 mb-4 space-y-1">
          <li>• Tracks consistency per month</li>
          <li>• Highlights inactive periods</li>
          <li>• Encourages discipline</li>
          <li>• Improves exposure rate</li>
          <li>• Supports weekly planning</li>
        </ul>

        {openChart === "monthly" ? (
          <>
            <div className="h-[260px]">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={monthlyData}>

                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />

                  <Bar
                    dataKey="count"
                    fill="#6366f1"
                    radius={[8,8,0,0]}
                    animationDuration={1500}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() => setMonthlyInsight(!monthlyInsight)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                Show Insight
              </button>

              <button
                onClick={() => setOpenChart(null)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
              >
                Close Chart
              </button>

            </div>

            {monthlyInsight && (
              <p className="mt-3 text-sm text-slate-600">
                Consistency in applying improves interview probability.
              </p>
            )}

          </>
        ) : (
          <button
            onClick={() => setOpenChart("monthly")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl"
          >
            Open Chart
          </button>
        )}

      </div>


      {/* FUNNEL */}

      <div className="bg-white/70 backdrop-blur-lg border shadow-xl rounded-2xl p-6">

        <h2 className="text-lg font-semibold mb-3">Conversion Funnel</h2>

        <ul className="text-sm text-slate-600 mb-4 space-y-1">
          <li>• Shows stage transitions</li>
          <li>• Detects bottlenecks</li>
          <li>• Measures interview success</li>
          <li>• Evaluates offer rate</li>
          <li>• Improves focus strategy</li>
        </ul>

        {openChart === "funnel" ? (
          <>
            <div className="h-[260px]">

              <ResponsiveContainer width="100%" height="100%">

                <FunnelChart>

                  <Tooltip />

                  <Funnel
                    dataKey="value"
                    data={funnelData}
                    animationDuration={1500}
                  >
                    <LabelList position="right" />
                  </Funnel>

                </FunnelChart>

              </ResponsiveContainer>

            </div>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() => setFunnelInsight(!funnelInsight)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                Show Insight
              </button>

              <button
                onClick={() => setOpenChart(null)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
              >
                Close Chart
              </button>

            </div>

            {funnelInsight && (
              <p className="mt-3 text-sm text-slate-600">
                If interviews are low compared to applications, resume improvement is needed.
              </p>
            )}

          </>
        ) : (
          <button
            onClick={() => setOpenChart("funnel")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl"
          >
            Open Chart
          </button>
        )}

      </div>


      {/* EXPERIENCE */}

      <div className="bg-white/70 backdrop-blur-lg border shadow-xl rounded-2xl p-6">

        <h2 className="text-lg font-semibold mb-3">Experience Distribution</h2>

        <ul className="text-sm text-slate-600 mb-4 space-y-1">
          <li>• Shows targeted experience levels</li>
          <li>• Detects senior mismatch</li>
          <li>• Improves alignment</li>
          <li>• Optimizes screening</li>
          <li>• Refines job targeting</li>
        </ul>

        {openChart === "experience" ? (
          <>
            <div className="h-[260px]">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={experienceData}>

                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>

                  <Bar
                    dataKey="value"
                    fill="#22c55e"
                    radius={[8,8,0,0]}
                    animationDuration={1500}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() => setExperienceInsight(!experienceInsight)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                Show Insight
              </button>

              <button
                onClick={() => setOpenChart(null)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
              >
                Close Chart
              </button>

            </div>

            {experienceInsight && (
              <p className="mt-3 text-sm text-slate-600">
                Targeting roles aligned with your experience improves success rate.
              </p>
            )}

          </>
        ) : (
          <button
            onClick={() => setOpenChart("experience")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl"
          >
            Open Chart
          </button>
        )}

      </div>

    </div>
  );
}

export default Charts;