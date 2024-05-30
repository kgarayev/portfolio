import { forwardRef, use } from "react";
import { useSelector } from "react-redux";
import { selectSkillsList } from "../store/mainSlice";
import Resume from "./Resume";

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
        <h2 className="text-xl font-extrabold">What I do</h2>
      </div>

      {/* <Resume></Resume> */}

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

      <div className="font-nunito pl-5">
        For a more detailed look at my skills and experience, feel free to check
        out my{" "}
        <span className="cursor-pointer hover:underline font-bold">
          <a
            href="https://drive.google.com/file/d/1giWcVLWw4pQYE55S-MlCHQYgu36Rki_h/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </span>
        .
      </div>
    </div>
  );
});

export default Work;

Work.displayName = "Work";
