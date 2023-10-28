import { useSelector, useDispatch } from "react-redux";
import { setScreenMode, selectScreenMode } from "@/store/mainSlice";

import Header from "./Header";
import Intro from "./Intro";
import StickyFooter from "./StickyFooter";
import Projects from "./Projects";
import Work from "./Work";

console.log("hello");

const MainTemplate = () => {
  const screenMode = useSelector(selectScreenMode);
  const dispatch = useDispatch();

  const screenModeToggle = () => {
    if (screenMode === 0) {
      dispatch(setScreenMode(1));
    } else if (screenMode === 1) {
      dispatch(setScreenMode(0));
    } else {
      return;
    }
  };

  if (screenMode === 0) {
    return (
      <div className="w-full">
        <Header></Header>
        <Intro></Intro>
        <button className="border h-8 w-20" onClick={screenModeToggle}>
          {screenMode}
        </button>
        <Work></Work>
        <Projects></Projects>
        <StickyFooter></StickyFooter>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <Header></Header>
        <Intro></Intro>
        <button className="border h-8 w-20" onClick={screenModeToggle}>
          {screenMode}
        </button>
        <StickyFooter></StickyFooter>
      </div>
    );
  }
};

export default MainTemplate;
