interface BoxProps {
  title: string;
  description: string;
  tag: string;
  buttonText: string;
}

const Box: React.FC<BoxProps> = ({ title, description, tag, buttonText }) => {
  return (
    <div className="relative max-w-lg mx-auto">
      <div className="absolute top-1 left-1 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform">
        <div className="flex items-center space-x-2 mb-4 mt-4 ml-4">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
        <div className="border-t-2 border-black mb-4"></div>

        <div className="m-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2">{description}</p>
          <div className="mt-2 flex items-center justify-between ">
            <div className="h-full flex">
              <p className="">{tag}</p>
            </div>

            <div className="flex items-center gap-2 h-full cursor-pointer hover:text-gray-500 font-bold ">
              <a className="">see my works</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
