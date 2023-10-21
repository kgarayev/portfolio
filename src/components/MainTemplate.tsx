import Header from "./Header";
import StickyFooter from "./StickyFooter";
import Work from "./Work";

const MainTemplate = () => {
  return (
    <div className="w-full">
      <Header></Header>
      <Work></Work>
      <StickyFooter></StickyFooter>
    </div>
  );
};

export default MainTemplate;
