import React from "react";
import Jobs from "../jobs.json";
import JobListing from "./JobListing";
import { useLocation } from 'react-router-dom';

const JobListings = () => {
  let recentJobs = Jobs.slice(0,3);  
  let headingText = "Recent Jobs";
  
  const location = useLocation();
  const pathname = location.pathname;

  if(pathname == '/jobs'){
    recentJobs = Jobs;
    headingText = "Browse Jobs"
  }
  
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {headingText}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {recentJobs.map((job)=>(
            <JobListing key={job.id} Job={job}/>
          ))}

        </div>
      </div>
    </section>
  );
};

export default JobListings;
