interface BoxProps {
  title: string;
  description: string;
  tag: string;
  buttonText: string;
}

const Box: React.FC<BoxProps> = ({ title, description, tag, buttonText }) => {
  return (
    <div className="relative max-w-lg mx-auto">
      <div className="absolute top-3 left-3 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl neo-brutalist">
        <div className="flex items-center space-x-2 mb-4 mt-4 ml-4">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
        <div className="border-t-2 border-black mb-4"></div>

        <div className="m-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2">{description}</p>
          <p className="mt-4 text-sm text-purple-500">{tag}</p>
          <div className="grid h-screen place-items-center font-extrabold">
            <a
              href="#"
              className="relative text-black hover:before:scale-x-100 before:scale-x-0 transition-transform transform ease-in-out duration-500 before:absolute before:inset-0 before:origin-right before:bg-yellow-300 before:z-[-1]"
            >
              Link text
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
