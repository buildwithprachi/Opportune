import { useEffect, useState } from "react";
import { getJobs } from "./jobs";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getJobs();
        console.log("FINAL JOBS:", result); // debug

        setJobs(result);
      } catch (error) {
        console.error("FETCH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Listings</h1>

      {loading && <p>Loading...</p>}

      {!loading && jobs.length === 0 && <p>No jobs found</p>}

      {!loading &&
        jobs.length > 0 &&
        jobs.map((job, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{job.title}</h3>
            <p><b>Company:</b> {job.company_name}</p>
            <p><b>Location:</b> {job.location}</p>

            <a href={job.url} target="_blank" rel="noreferrer">
              Apply
            </a>
          </div>
        ))}
    </div>
  );
}

export default App;