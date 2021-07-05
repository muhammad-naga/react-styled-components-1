import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ReuslableSection from "../components/ReusableSection";
import {
  AboutSection,
  DiscoverSection,
  homeSectionOne,
  jackpotsSection,
  performanceSection,
  servicesSection,
} from "../components/sectionData";
import SideBar from "../components/Sidebar";
import Navbar from "./../components/Navbar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroSection />
      <ReuslableSection {...homeSectionOne} />
      <ReuslableSection {...servicesSection} />
      <ReuslableSection {...DiscoverSection} />
      <ReuslableSection {...AboutSection} />
      <ReuslableSection {...jackpotsSection} />
      <ReuslableSection {...performanceSection} />
      <Footer />
    </div>
  );
};

export default HomePage;
