interface SkillBoxProps {
  iconLink: string[];
  title: string[];
}

const SkillBox: React.FC<SkillBoxProps> = ({ iconLink, title }) => {
  return (
    <div className="relative mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-800 rounded-full shadow-md w-full h-full p-3"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-3 h-[230px]">
        <div className="flex items-center space-x-2"></div>

        <div className="flex flex-col items-center justify-between h-full w-full">
          <div className="text-center mb-3">
            {title.map((item) => {
              return <h2 className="text-lg font-semibold">{item}</h2>;
            })}
          </div>

          <div className="flex flex-col justify-between h-full mb-3">
            <div className="flex justify-center items-center">
              {iconLink.map((item, index) => {
                return (
                  <div className="h-24 w-24">
                    <img src={item} alt="icon" className="h-full w-full" />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-500 font-bold ">
              <a className="">learn more</a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
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
