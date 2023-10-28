import Photo from "./Photo";

const Intro = () => {
  return (
    <div className="p-5 pt-0 pb-28">
      <h1 className="mb-5 text-2xl font-semibold mt-2">
        I am a Software Engineer.
      </h1>
      <p className="mb-5 font-nunito font-semibold mt-5">
        Building things with code to solve real-world problems is what I enjoy
        most. Skilled in{" "}
        <span className=" text-xl font-bold font-ibmPlexMono text-blue-600">
          Node
        </span>
        ,{" "}
        <span className="text-xl font-bold font-ibmPlexMono text-blue-600">
          React
        </span>
        ,{" "}
        <span className="text-xl font-bold font-ibmPlexMono text-blue-600">
          Python
        </span>
        ,{" "}
        <span className="text-xl font-bold font-ibmPlexMono text-blue-600">
          C
        </span>
        , and both{" "}
        <span className="text-xl font-bold font-ibmPlexMono text-blue-600">
          SQL
        </span>{" "}
        and{" "}
        <span className="text-xl font-bold font-ibmPlexMono text-blue-600">
          NoSQL
        </span>{" "}
        databases, I'm all about creating practical solutions. Let's build
        something together!
      </p>
      <div className="flex justify-center mt-5">
        <div className="max-h-[240px] max-w-[240px]">
          <Photo></Photo>
        </div>
      </div>
    </div>
  );
};

export default Intro;
