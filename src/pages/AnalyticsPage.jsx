import Charts from "../components/stats/Charts";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/ui/AnimatedBackground";
function AnalyticsPage() {
  return (
    <div className="min-h-screen relative bg-slate-50">
  <AnimatedBackground type="grid" />
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-2xl">
            Visualize your job application performance using meaningful metrics,
            trends, and conversion insights.
          </p>
        </div>
       
        <Charts />

        {/* Back Button */}
        <div className="mt-16">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-200"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;