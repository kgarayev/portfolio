import Photo from "./Photo";
import { useDispatch } from "react-redux";
import { setTargetId } from "@/store/mainSlice";

const Intro = () => {
  const dispatch = useDispatch();

  const scrollToSection = (targetId: string | null) => {
    dispatch(setTargetId(targetId));
    setTimeout(() => {
      dispatch(setTargetId(""));
    }, 1);
  };

  return (
    <div className="p-5 pt-0 pb-4">
      <h1 className="mb-4 text-lg font-bold mt-2">I am a Software Engineer.</h1>
      <p className="mb-2 font-nunito mt-0">
        Skilled in <span className=" font-semibold bg-emerald-100">TS</span>,{" "}
        <span className="font-semibold  bg-emerald-100">JS</span>,{" "}
        <span className="font-semibold bg-emerald-100">Node</span>,{" "}
        <span className="font-semibold bg-emerald-100">React</span>,{" "}
        <span className="font-semibold  bg-emerald-100">Python</span>,{" "}
        <span className="font-semibold  bg-emerald-100">C</span>, and both{" "}
        <span className="font-semibold  bg-emerald-100">SQL</span> and{" "}
        <span className="font-semibold  bg-emerald-100">NoSQL</span> databases,
        I&apos;m all about building things with code to solve real-world
        problems.{" "}
        <span
          className="cursor-pointer hover:underline font-bold"
          onClick={() => scrollToSection("contact")}
        >
          Give me a shout
        </span>
        , let&apos;s create something together!
      </p>
      {/* <div className="flex justify-center mt-0">
        <div className="max-h-[180px] max-w-[180px] mt-0">
          <Photo></Photo>
        </div>
      </div> */}
    </div>
  );
};

export default Intro;
