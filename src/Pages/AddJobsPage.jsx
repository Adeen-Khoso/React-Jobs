import React from "react";
import Form from "../components/Form";
import { toast } from "react-toastify";

const AddJobsPage = () => {
  const handleSubmit = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    toast.success("Job added successfully");
  };

  return <Form handleSubmit={handleSubmit} />;
};

export default AddJobsPage;
