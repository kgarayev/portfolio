import { useSelector } from "react-redux";
import { selectSkillsList } from "../store/mainSlice";

import SkillBox from "./SkillBox";

interface SkillItem {
  title: string;
  iconLink: string[];
}

const Work = () => {
  const skills = useSelector(selectSkillsList);

  return (
    <div className="mt-6">
      <div className="w-full text-center">
        <h2 className="text-xl font-bold">What I do</h2>
      </div>
      <div className="mb-16 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-5">
        {skills.map((item: SkillItem) => {
          return (
            <SkillBox title={item.title} iconLink={item.iconLink}></SkillBox>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
