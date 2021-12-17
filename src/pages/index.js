import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Car from "../images/svg-1.svg";
import Money from "../images/svg-3.svg";
import Platform from "../images/svg-4.svg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} img={Car} />
      <InfoSection {...homeObjTwo} img={Money} />
      <ServicesSection />
      <InfoSection {...homeObjThree} img={Platform} />
      <Footer />
    </>
  );
};

export default Home;
