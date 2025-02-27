export default function JobDetails({ job, onClose }) {
    if (!job) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
          <p className="text-sm text-gray-600">{job.salary}</p>
          <h3 className="mt-4 font-semibold">Required Skills</h3>
          <ul className="list-disc list-inside">
            {job.requiredSkills.map((skill, index) => (
              <li key={index} className="text-sm">{skill}</li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  