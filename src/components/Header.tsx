import Logo from "./Logo";
import Photo from "./Photo";
import { useDispatch } from "react-redux";
import { setTargetId } from "@/store/mainSlice";
import { forwardRef } from "react";

const Header = () => {
  const dispatch = useDispatch();

  const scrollToSection = (targetId: string | null) => {
    dispatch(setTargetId(targetId));
    setTimeout(() => {
      dispatch(setTargetId(""));
    }, 1);
  };

  return (
    <div className="p-5 pb-0 w-full flex justify-between" id="header">
      <div className="">
        {/* <p className="mb-2 text-lg font-semibold">👋 Hi, I&apos;m</p> */}
        <p className="mb-2 text-lg font-bold">Hi, I&apos;m</p>
        <Logo></Logo>
      </div>

      <div className="hidden md:flex flex-end min-w-[450px] justify-between text-md font-semibold items-end pb-2">
        <div
          onClick={() => scrollToSection("about")}
          className="hover:underline hover:font-bold cursor-pointer"
        >
          <p className="">about</p>
        </div>

        <div
          onClick={() => scrollToSection("work")}
          className="hover:underline hover:font-bold cursor-pointer"
        >
          <p className="">what I do</p>
        </div>

        <div
          onClick={() => scrollToSection("projects")}
          className="hover:underline hover:font-bold cursor-pointer"
        >
          <p className="">my work</p>
        </div>

        <div
          onClick={() => scrollToSection("contact")}
          className="hover:underline hover:font-bold cursor-pointer"
        >
          <p className="">contact</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.displayName = "Header";
