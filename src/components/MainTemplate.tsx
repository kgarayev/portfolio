import { useSelector, useDispatch } from "react-redux";
import { setScreenMode, selectScreenMode } from "@/store/mainSlice";

import Header from "./Header";
import Intro from "./Intro";
import StickyFooter from "./StickyFooter";
import Projects from "./Projects";
import Work from "./Work";
import About from "./About";

const MainTemplate = () => {
  return (
    <div className="w-full">
      <Header></Header>
      <Intro></Intro>

      <Work></Work>
      <Projects></Projects>
      <About></About>

      <StickyFooter></StickyFooter>
    </div>
  );
};

export default MainTemplate;
