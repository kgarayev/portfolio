import Photo from "./Photo";

const Intro = () => {
  return (
    <div className="p-5 pt-0 pb-16">
      <h1 className="mb-5 text-2xl font-semibold mt-2">
        I am a Software Engineer.
      </h1>
      <p className="mb-5 font-nunito font-semibold mt-6">
        Building things with code to solve real-world problems is what I enjoy
        most. Skilled in{" "}
        <span className=" text-xl font-bold font-ibmPlexMono  bg-emerald-200">
          TS
        </span>
        ,{" "}
        <span className=" text-xl font-bold font-ibmPlexMono  bg-emerald-200">
          JS
        </span>
        ,{" "}
        <span className=" text-xl font-bold font-ibmPlexMono  bg-emerald-200">
          Node
        </span>
        ,{" "}
        <span className="text-xl font-bold font-ibmPlexMono  bg-emerald-200">
          React
        </span>
        ,{" "}
        <span className="text-xl font-bold font-ibmPlexMono  bg-emerald-200">
          Python
        </span>
        ,{" "}
        <span className="text-xl font-bold font-ibmPlexMono  bg-emerald-200">
          C
        </span>
        , and both{" "}
        <span className="text-xl font-bold font-ibmPlexMono  bg-emerald-200">
          SQL
        </span>{" "}
        and{" "}
        <span className="text-xl font-bold font-ibmPlexMono  bg-emerald-200">
          NoSQL
        </span>{" "}
        databases, I&apos;m all about creating practical solutions. Let&apos;s
        build something together!
      </p>
      <div className="flex justify-center mt-5">
        <div className="max-h-[240px] max-w-[240px] mt-2">
          <Photo></Photo>
        </div>
      </div>
    </div>
  );
};

export default Intro;
