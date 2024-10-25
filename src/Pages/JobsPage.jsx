import React from "react";
import JobListings from "../components/JobListings";

const JobsPage = () => {
  return <section className="px-4 py-2 bg-blue-50">
    <JobListings atHome={false}/>
  </section>
};

export default JobsPage;
