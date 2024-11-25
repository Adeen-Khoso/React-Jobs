import React from "react";

const JobLoader = async ({ params }) => {
  const res = await fetch(
    `https://shorthaired-misty-dilophosaurus.glitch.me/jobs/${params.id}`
  );
  const data = await res.json();
  return data;
};

export default JobLoader;
