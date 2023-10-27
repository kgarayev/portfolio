interface BoxProps {
  title: string;
  description: string;
  tag: string;
  buttonText: string;
  imageLink: string;
}

const Box: React.FC<BoxProps> = ({
  title,
  description,
  tag,
  buttonText,
  imageLink,
}) => {
  return (
    <div className="relative min-w-[225px] max-w-[600px] mx-auto w-full">
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
          <div className="aspect-w-1 aspect-h-1 ">
            <img
              src={imageLink}
              alt="image"
              className=" border-2 mt-2 mb-2 object-cover aspect-content"
            />
          </div>

          <p className="mt-2">{description}</p>
          <div className="mt-2 flex items-center justify-between ">
            <div className="h-full flex">{/* <p className="">{tag}</p> */}</div>

            <div className="flex items-center gap-2 h-full cursor-pointer hover:text-gray-500 font-bold ">
              <a className="">see my work</a>

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

export default Box;
