import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setScreenMode,
  selectScreenMode,
  selectTargetId,
} from "@/store/mainSlice";

import Header from "./Header";
import Intro from "./Intro";
import StickyFooter from "./StickyFooter";
import Projects from "./Projects";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import ToTop from "./ToTop";

const MainTemplate = () => {
  const targetId = useSelector(selectTargetId);
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let selectedRef;

    switch (targetId) {
      case "work":
        selectedRef = workRef.current;
        break;
      case "projects":
        selectedRef = projectsRef.current;
        break;
      case "about":
        selectedRef = aboutRef.current;
        break;
      case "contact":
        selectedRef = contactRef.current;
        break;
      default:
        selectedRef = null;
    }

    if (selectedRef) {
      selectedRef.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetId]);

  return (
    <div className="w-full p-3 md:p-5">
      <Header></Header>
      <Intro></Intro>

      <Work ref={workRef}></Work>
      <Projects ref={projectsRef}></Projects>
      <div className="lg:flex items-start">
        <About ref={aboutRef}></About>
        <Contact ref={contactRef}></Contact>
      </div>

      <ToTop></ToTop>

      <StickyFooter></StickyFooter>
    </div>
  );
};

export default MainTemplate;
