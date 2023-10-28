import { useSelector } from "react-redux";
import { selectSkillsList } from "../store/mainSlice";

import SkillBox from "./SkillBox";

interface SkillItem {
  title: string[];
  iconLink: string[];
}

const Work = () => {
  const skills = useSelector(selectSkillsList);

  return (
    <div className="mt-6">
      <div className="w-full text-center">
        <h2 className="text-xl font-bold">What I do</h2>
      </div>
      <div className="flex justify-center items-center p-5 ">
        <div className=" xs:grid xs:gap-2 xs:grid-cols-1 sm:grid-cols-2 place-items-center justify-items-center content-center justify-content-center w-full lg:flex lg:justify-center lg:items-center lg:gap-8">
          {skills.map((item: SkillItem) => (
            <div className="w-[245px] h-[240px] m-2" key={item.title[0]}>
              <SkillBox title={item.title} iconLink={item.iconLink} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
