import Logo from "./Logo";
import Photo from "./Photo";

const Header = () => {
  return (
    <div className="h-24 w-full">
      <div className="h-full w-72 p-5">
        <p className="mb-5">Hi, my name is</p>
        <Logo></Logo>
      </div>
      {/* <div>
        <Photo></Photo>
      </div> */}
    </div>
  );
};

export default Header;
