interface BoxProps {
  title: string;
  description: string;
  tag: string;
  buttonText: string;
}

const Box: React.FC<BoxProps> = ({ title, description, tag, buttonText }) => {
  return (
    <div className="relative max-w-lg mx-auto">
      <div className="absolute top-3 left-3 bg-gray-800 rounded-lg shadow-md w-full h-full"></div>
      <div className="relative z-10 p-6 bg-white border border-black rounded-lg neo-brutalist">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        <div className="border-t border-black mb-4"></div>

        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
        <p className="mt-4 text-sm text-purple-500">{tag}</p>

        <button className="px-4 py-2 mt-4 text-white bg-black border border-black hover:bg-gray-700 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Box;
