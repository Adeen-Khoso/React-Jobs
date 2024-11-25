import React from "react";
import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

const JobListings = ({ atHome }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchingData = async () => {
        const res = await fetch("/api/jobs");
        const data = await res.json();

        setJobs(atHome ? data.slice(0, 3) : data);
        setLoading(false);
      };

      fetchingData();
    } catch {
      console.log("error fetching data", error);
    }
  }, []);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#4338ca",
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {atHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <RingLoader color="indigo" cssOverride={override} size={150} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} Job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default JobListings;
