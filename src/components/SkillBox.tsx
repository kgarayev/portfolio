import { useDispatch } from "react-redux";
import { setScreenMode } from "@/store/mainSlice";
import { setTargetId } from "@/store/mainSlice";

import Image from "next/image";

interface SkillBoxProps {
  iconLink: string[];
  title: string[];
  techUsed: string[];
}

const SkillBox: React.FC<SkillBoxProps> = ({ iconLink, title, techUsed }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setScreenMode(title[0]));
  };

  const scrollToSection = (targetId: string | null) => {
    dispatch(setTargetId(targetId));
  };

  return (
    <div className="relative mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-700 rounded-full shadow-md w-full h-full p-3"></div>
      <div className="relative z-10 bg-white border border-gray-700 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-3 h-[240px]">
        <div className="flex items-center space-x-2"></div>

        <div className="flex flex-col items-center justify-between h-full w-full">
          <div className="text-center mt-4">
            {title.map((item) => {
              return (
                <h2 className="text-md font-bold" key={item}>
                  {item}
                </h2>
              );
            })}
          </div>

          <div className="flex flex-col justify-around items-center h-full mb-3 ">
            <div className="flex justify-center items-center git add h-24 w-24">
              {iconLink.map((item, index) => {
                return (
                  <div
                    className="h-full w-full flex justify-center items-center "
                    key={item}
                  >
                    <Image
                      src={item}
                      alt="icon"
                      className="h-full w-full opacity-70"
                      height={500}
                      width={500}
                    />
                  </div>
                );
              })}
            </div>

            <div
              onClick={
                title[0] === "Coaching"
                  ? () => scrollToSection("contact")
                  : onClick
              }
              className="flex items-center gap-2 cursor-pointer hover:text-gray-500 font-bold "
            >
              <a className="font-nunito text-sm">
                {title[0] === "Coaching" ? "contact me" : "learn more"}
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
