import { useEffect } from "react";
import useJobStore from "../store/useJobStore";

export default function JobList({ onSelectJob }) {
  const { jobs, fetchJobs } = useJobStore();

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Job Recommendations</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectJob(job)}
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
            <p className="text-sm text-gray-600">{job.salary}</p>
            <div className="mt-2">
              <div className={`h-4 w-full rounded-full ${job.matchScore >= 80 ? "bg-green-500" : job.matchScore >= 50 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${job.matchScore}%` }}></div>
              <p className="text-sm">{job.matchScore}% Match</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
