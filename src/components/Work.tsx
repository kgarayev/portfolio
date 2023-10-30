import { forwardRef, use } from "react";
import { useSelector } from "react-redux";
import { selectSkillsList, selectScreenMode } from "../store/mainSlice";

import SkillBox from "./SkillBox";
import PopUp from "./PopUp";

interface SkillItem {
  title: string[];
  iconLink: string[];
  techUsed: string[];
}

const Work = forwardRef<HTMLDivElement>((props, ref) => {
  const skills = useSelector(selectSkillsList);
  const screenMode = useSelector(selectScreenMode);
  let techStack: string[] = [];

  skills.forEach((item: SkillItem) => {
    if (screenMode === item.title[0]) {
      techStack = item.techUsed;
      // console.log(techStack);
    }
  });

  return (
    <div ref={ref} id="work" className="relative pt-8 pb-8 bg-fuchsia-100">
      {/* <div className="z-20 absolute border-2 w-5/6 h-[85vh] left-1/2 transform -translate-x-1/2">
        <PopUp techUsed={techStack}></PopUp>
      </div> */}

      <div className="w-full text-center p-5">
        <h2 className="text-3xl font-bold">What I do</h2>
      </div>
      <div className="flex justify-center items-center p-5 ">
        <div className=" xs:grid xs:gap-2 xs:grid-cols-1 sm:grid-cols-2 place-items-center justify-items-center content-center justify-content-center w-full lg:flex lg:justify-center lg:items-center lg:gap-8">
          {skills.map((item: SkillItem) => (
            <div className="w-[245px] h-[240px] m-2" key={item.title[0]}>
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
