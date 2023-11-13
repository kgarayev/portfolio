import { useDispatch, useSelector } from "react-redux";
import {
  setScreenMode,
  selectScreenMode,
  selectSkillsList,
} from "@/store/mainSlice";
import Image from "next/image";

interface PopProps {
  techUsed: any[];
}

interface SkillItem {
  title: string[];
  iconLink: string[];
  techUsed: any[];
}

const PopUp = () => {
  const dispatch = useDispatch();

  const screenMode = useSelector(selectScreenMode);
  const skills = useSelector(selectSkillsList);

  const visibilityClass = screenMode === "" ? "hidden" : "";

  let techStack: any[] = [];

  skills.forEach((item: SkillItem) => {
    if (screenMode === item.title[0]) {
      techStack = item.techUsed;
    }
  });

  return (
    <div
      className={`${visibilityClass} fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-[75vh] `}
    >
      <div className="relative min-w-[225px] max-w-[600px] mx-auto w-full h-full ">
        <div className="absolute top-1 left-1 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
        <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl h-full w-full neo-brutalist overflow-y-auto custom-scrollbar overflow-x-hidden">
          <div className="flex flex-col font-nunito w-full">
            <div className="justify-around items-center w-full p-1 mr-4">
              <div className="flex w-full justify-end ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 cursor-pointer hover:text-gray-500 mr-2 mt-1"
                  onClick={() => {
                    dispatch(setScreenMode(""));
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="w-full flex justify-center m-0 p-0">
                <h2 className="text-xl font-bold font-ibmPlexMono m-0 p-0">
                  Tech used
                </h2>
              </div>
            </div>

            <div className="flex justify-center items-center w-full h-full">
              <div className="grid grid-cols-3 place-items-center">
                {techStack.map((item) => {
                  return (
                    <div
                      className="flex justify-center items-center flex-col w-24 h-24"
                      key={item.name}
                    >
                      <img src={item.link} alt="tech" className="w-12 h-12" />
                      <p className="text-sm font-semibold">{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
