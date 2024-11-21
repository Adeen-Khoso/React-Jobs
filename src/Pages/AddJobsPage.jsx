import React from "react";
import Form from "../components/form";

const AddJobsPage = () => {
  const handleSubmit = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
  };

  return <Form handleSubmit={handleSubmit} />;
};

export default AddJobsPage;
