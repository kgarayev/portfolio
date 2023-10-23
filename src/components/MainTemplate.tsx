import Header from "./Header";
import Intro from "./Intro";
import StickyFooter from "./StickyFooter";
import Work from "./Work";

const MainTemplate = () => {
  return (
    <div className="w-full">
      <Header></Header>
      <Intro></Intro>
      <Work></Work>
      <StickyFooter></StickyFooter>
    </div>
  );
};

export default MainTemplate;
