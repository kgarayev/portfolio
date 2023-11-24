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
      className={`${visibilityClass} fixed z-30 top-0 left-0 w-full h-full bg-white bg-opacity-80`}
      onClick={() => {
        dispatch(setScreenMode(""));
      }}
    >
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85vw] min-h-[75vh] sm:min-h-[10vh] sm:max-h-[70vh] sm:w-[375px]`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative z-30 min-w-[225px] max-w-[600px] mx-auto w-full h-full ">
          <div className="absolute z-30 top-1 left-1 bg-gray-700 rounded-2xl shadow-md w-full h-full"></div>
          <div className="relative z-30 bg-white border-2 border-gray-700 rounded-2xl h-full w-full pb-4 neo-brutalist overflow-y-auto custom-scrollbar overflow-x-hidden">
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
                  <h2 className="text-lg font-extrabold m-0 p-0 font-ibmPlexMono">
                    Tech used
                  </h2>
                </div>
              </div>

              <div className="flex justify-center items-center w-full h-full">
                <div className="grid grid-cols-3 gap-1 place-items-center sm:gap-2">
                  {techStack.map((item) => {
                    return (
                      <div
                        className="flex justify-center items-center flex-col w-28 h-24"
                        key={item.name}
                      >
                        <Image
                          src={item.link}
                          alt="tech"
                          className="w-12 h-12"
                          width={12}
                          height={12}
                        />
                        <div className="text-sm font-semibold w-full text-center min-w-[75px] mt-2">
                          {item.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
