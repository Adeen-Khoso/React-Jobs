import React from "react";
import { useLoaderData } from "react-router-dom";
import EditForm from "../components/EditForm";
import { toast } from "react-toastify";

const EditJobPage = () => {
  const jobInfo = useLoaderData();

  const updateJob = async (id, newJob) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    toast.success("Job updated successfully");
  };

  return (
    <>
      <EditForm jobInfo={jobInfo} updateJob={updateJob} />
    </>
  );
};

export default EditJobPage;
