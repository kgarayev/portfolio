import Header from "./Header";
import Intro from "./Intro";
import StickyFooter from "./StickyFooter";
import Projects from "./Projects";
import Work from "./Work";

console.log("hello");

const MainTemplate = () => {
  return (
    <div className="w-full">
      <Header></Header>
      <Intro></Intro>
      <Work></Work>
      <Projects></Projects>
      <StickyFooter></StickyFooter>
    </div>
  );
};

export default MainTemplate;
