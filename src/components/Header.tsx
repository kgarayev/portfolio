import Logo from "./Logo";
import Photo from "./Photo";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-1 w-full">
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
