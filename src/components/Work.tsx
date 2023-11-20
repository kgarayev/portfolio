import { forwardRef, use } from "react";
import { useSelector } from "react-redux";
import { selectSkillsList } from "../store/mainSlice";

import SkillBox from "./SkillBox";

interface SkillItem {
  title: string[];
  iconLink: string[];
  techUsed: string[];
}

const Work = forwardRef<HTMLDivElement>((props, ref) => {
  const skills = useSelector(selectSkillsList);

  return (
    // <div ref={ref} id="work" className="relative pt-8 pb-8 bg-fuchsia-100">
    <div ref={ref} id="work" className="relative pt-0 pb-2">
      <div className="w-full p-5 pb-4">
        <h2 className="text-2xl font-semibold">What I do</h2>
      </div>
      <div className="flex justify-center items-center p-5 pt-0 w-full">
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((item: SkillItem) => (
            <div
              className="w-full min-w-[150px] xs:max-w-[650px]"
              key={item.title[0]}
            >
              <SkillBox
                title={item.title}
                iconLink={item.iconLink}
                techUsed={item.techUsed}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Work;

Work.displayName = "Work";
