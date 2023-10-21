import Logo from "./Logo";
import Photo from "./Photo";

const Header = () => {
  return (
    <div className="flex justify-center w-full h-24 ">
      <div className="h-full">
        <Logo></Logo>
      </div>
      <div>
        <Photo></Photo>
      </div>
    </div>
  );
};

export default Header;
