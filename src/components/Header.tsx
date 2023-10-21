import Logo from "./Logo";
import Photo from "./Photo";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-2 w-full border border-gray-500">
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
