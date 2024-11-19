import React from "react";
import JobDetail from "../components/JobDetail";
import { useLoaderData } from "react-router-dom";

const JobPage = () => {
  const jobInfo = useLoaderData();

  return (
    <>
      <JobDetail jobDetails={jobInfo} />
    </>
  );
};

export default JobPage;
