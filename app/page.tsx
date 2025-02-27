"use client";

import { useState } from "react";
import JobList from "../components/JobList";
import JobDetails from "../components/JobDetails";


export default function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">AI-Powered Job Match Dashboard</h1>
      <JobList onSelectJob={setSelectedJob} />
      {selectedJob && <JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
}
