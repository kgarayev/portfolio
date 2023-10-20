import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex justify-center border border-gray-500 w-full h-32 ">
      <div className="h-full">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default Header;
