import Logo from "./Logo";
import Photo from "./Photo";

const Header = () => {
  return (
    <div className="p-5 pb-2">
      <p className="mb-2 text-lg font-semibold">👋 Hi, I'm</p>
      <Logo></Logo>
    </div>
  );
};

export default Header;
