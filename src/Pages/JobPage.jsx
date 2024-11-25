import React from "react";
import JobDetail from "../components/JobDetail";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const JobPage = () => {
  const jobInfo = useLoaderData();

  const deleteJob = async (id) => {
    const res = await fetch(
      `https://shorthaired-misty-dilophosaurus.glitch.me/jobs/${id}`,
      {
        method: "DELETE",
      }
    );
    toast.success("Job deleted successfully");
  };

  return (
    <>
      <JobDetail jobDetails={jobInfo} deleteJob={deleteJob} />
    </>
  );
};

export default JobPage;
