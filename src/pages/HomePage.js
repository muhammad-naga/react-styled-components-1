import { useState } from "react";
import HeroSection from "../components/HeroSection";
import SideBar from "../components/Sidebar";
import Navbar from "./../components/Navbar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroSection />
    </div>
  );
};

export default HomePage;
