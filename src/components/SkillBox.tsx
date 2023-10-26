interface SkillBoxProps {
  iconLink: string[];
  title: string;
  description: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({
  iconLink,
  title,
  description,
}) => {
  return (
    <div className="relative min-w-[100px] max-w-[300px] mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-800 rounded-full shadow-md w-full h-full p-6"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-2">
        <div className="flex items-center space-x-2"></div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold">{title}</h2>

          {iconLink.map((item, index) => {
            return (
              <div className="h-12 w-12">
                <img src={item} alt="icon" className="h-full w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
