interface SkillBoxProps {
  iconLink: string;
  title: string;
  description: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({
  iconLink,
  title,
  description,
}) => {
  return (
    <div className="relative min-w-[225px] max-w-[600px] mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform">
        <div className="flex items-center space-x-2"></div>

        <div className="m-4">
          <div className="h-18 w-18">
            <img src={iconLink} alt="icon" />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
