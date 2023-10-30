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

const MainTemplate = () => {
  const targetId = useSelector(selectTargetId);
  const mySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetId === "about" && mySectionRef.current) {
      mySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetId]);

  return (
    <div className="w-full">
      <Header></Header>
      <Intro></Intro>

      <Work></Work>
      <Projects></Projects>
      <About ref={mySectionRef}></About>
      <Contact></Contact>

      <StickyFooter></StickyFooter>
    </div>
  );
};

export default MainTemplate;
