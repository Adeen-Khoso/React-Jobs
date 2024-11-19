import React from "react";

const JobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = res.json();
  return data;
};

export default JobLoader;
