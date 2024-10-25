import React from "react";
import Jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = ({atHome}) => {
  let jobListings = atHome? Jobs.slice(0,3) : Jobs;
  
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {atHome? "Recent Jobs" : "Browse Jobs"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {jobListings.map((job)=>(
            <JobListing key={job.id} Job={job}/>
          ))}

        </div>
      </div>
    </section>
  );
};

export default JobListings;
