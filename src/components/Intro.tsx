import Photo from "./Photo";

const Intro = () => {
  return (
    <div className="p-5 pt-0 pb-8">
      <h1 className="mb-5 text-2xl font-semibold mt-2">
        I am a Software Engineer.
      </h1>
      <p className="mb-2 font-nunito font-semibold mt-6">
        Skilled in{" "}
        <span className=" text-lg font-semibold font-ibmPlexMono  bg-emerald-100">
          TS
        </span>
        ,{" "}
        <span className=" text-lg font-semibold font-ibmPlexMono  bg-emerald-100">
          JS
        </span>
        ,{" "}
        <span className=" text-lg font-semibold font-ibmPlexMono  bg-emerald-100">
          Node
        </span>
        ,{" "}
        <span className="text-lg font-semibold font-ibmPlexMono  bg-emerald-100">
          React
        </span>
        ,{" "}
        <span className="text-lg font-semibold font-ibmPlexMono  bg-emerald-100">
          Python
        </span>
        ,{" "}
        <span className="text-lg font-semibold font-ibmPlexMono  bg-emerald-100">
          C
        </span>
        , and both{" "}
        <span className="text-lg font-semibold font-ibmPlexMono  bg-emerald-100">
          SQL
        </span>{" "}
        and{" "}
        <span className="text-lg font-semibold font-ibmPlexMono  bg-emerald-100">
          NoSQL
        </span>{" "}
        databases, I&apos;m all about building things with code to solve
        real-world problems. Give me a shout, let&apos;s create something
        together!
      </p>
      <div className="flex justify-center mt-2">
        <div className="max-h-[180px] max-w-[180px] mt-2">
          <Photo></Photo>
        </div>
      </div>
    </div>
  );
};

export default Intro;
