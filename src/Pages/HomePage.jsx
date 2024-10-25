import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import JobListings from "../components/JobListings";
import LastSection from "../components/LastSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardContainer />
      <JobListings atHome={true}/>
      <LastSection />
    </>
  );
}

export default HomePage