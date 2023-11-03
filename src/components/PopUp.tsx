import { useDispatch, useSelector } from "react-redux";
import {
  setScreenMode,
  selectScreenMode,
  selectSkillsList,
} from "@/store/mainSlice";
import Image from "next/image";

interface PopProps {
  techUsed: string[];
}

interface SkillItem {
  title: string[];
  iconLink: string[];
  techUsed: string[];
}

const PopUp: React.FC<PopProps> = ({ techUsed }) => {
  const dispatch = useDispatch();

  const screenMode = useSelector(selectScreenMode);
  const skills = useSelector(selectSkillsList);

  return (
    <div className="z-20 absolute border-2 w-5/6 h-[85vh] left-1/2 transform -translate-x-1/2">
      <div className="relative min-w-[225px] max-w-[600px] mx-auto w-full h-full">
        <div className="absolute top-1 left-1 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
        <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl h-full w-full neo-brutalist">
          <div className="flex items-center space-x-2 mb-4 mt-4 ml-4"></div>

          <div className="flex flex-col gap-5 m-4 font-nunito p-2 w-full">
            <div className="flex justify-around items-center">
              <h2 className="text-xl font-bold font-ibmPlexMono">Tech used</h2>
              <p
                onClick={() => {
                  dispatch(setScreenMode(""));
                }}
                className="font-bold text-2xl"
              >
                X
              </p>
            </div>

            <div className="grid grid-cols-3 w-full h-full gap-2">
              {techUsed.map((item: string) => {
                return (
                  <div className="" key={item}>
                    <img src={item} alt="tech" className="w-12 h-12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
