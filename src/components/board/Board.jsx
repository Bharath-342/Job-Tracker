import Column from "../column/Column";

function Board({ applications = [] }) {
  const statuses = ["applied", "interview", "offer", "rejected"];

  return (
    <div className="bg-slate-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {statuses.map((status) => (
            <Column
              key={status}
              status={status}
              applications={applications.filter(
                (app) => app.status === status
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;