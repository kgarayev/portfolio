import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectSkillsList } from "../store/mainSlice";

import SkillBox from "./SkillBox";

interface SkillItem {
  title: string[];
  iconLink: string[];
}

const Work = forwardRef<HTMLDivElement>((props, ref) => {
  const skills = useSelector(selectSkillsList);

  return (
    <div ref={ref} id="work" className="pt-20 pb-20 bg-fuchsia-100">
      <div className="w-full text-center p-5">
        <h2 className="text-3xl font-bold">What I do</h2>
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
});

export default Work;
