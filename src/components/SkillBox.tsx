interface SkillBoxProps {
  iconLink: string[];
  title: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ iconLink, title }) => {
  return (
    <div className="relative mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-800 rounded-full shadow-md w-full h-full p-3"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-3 h-[230px]">
        <div className="flex items-center space-x-2"></div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold m-2">{title}</h2>

          <div className="grid grid-cols-3 gap-4">
            {iconLink.map((item, index) => {
              return (
                <div className="h-9 w-9">
                  <img src={item} alt="icon" className="h-full w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
