import Logo from "./Logo";
import Photo from "./Photo";

const Header = () => {
  return (
    <div className="p-2 w-full">
      <div className="h-40">
        <Logo></Logo>
      </div>
      {/* <div>
        <Photo></Photo>
      </div> */}
    </div>
  );
};

export default Header;
