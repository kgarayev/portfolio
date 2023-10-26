import SkillBox from "./SkillBox";

const Work = () => {
  return (
    <div className="mt-6">
      <div className="w-full text-center">
        <h2 className="text-xl font-bold">What I do</h2>
      </div>
      <div className="mb-16 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-5">
        <SkillBox
          title="Frontend"
          description="JavaScipt"
          iconLink={["/js.png", "/ts.png"]}
        ></SkillBox>
      </div>
    </div>
  );
};

export default Work;
