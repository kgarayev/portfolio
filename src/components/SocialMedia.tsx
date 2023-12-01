const SocialMedia = () => {
  return (
    <>
      {" "}
      <div className="w-full flex justify-center items-center">
        {" "}
        <div className=" flex justify-center items-center gap-1 max-w-[500px] w-3/4 pb-6 w-full md:pb-10 md:pt-2">
          <div className="relative mx-auto  h-14 w-14">
            <div className="absolute top-1 left-1 bg-gray-700 rounded-full shadow-md w-full h-full p-3"></div>
            <div className="relative z-10 bg-white border border-gray-700 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-3 h-full w-full hover:bg-blue-100">
              <div className="flex items-center space-x-2"></div>

              <a href="https://www.linkedin.com/in/garayevk/" target="_blank">
                <img
                  src="/linkedin2.svg"
                  alt="linkedin"
                  className="opacity-70"
                />
              </a>
            </div>
          </div>

          <div className="relative mx-auto  h-14 w-14">
            <div className="absolute top-1 left-1 bg-gray-700 rounded-full shadow-md w-full h-full p-3"></div>
            <div className="relative z-10 bg-white border border-gray-700 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-3 h-full w-full hover:bg-stone-200">
              <div className="flex items-center space-x-2"></div>

              <a href="https://github.com/kgarayev" target="_blank">
                <img src="/github2.svg" alt="github" className="opacity-70" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-14 w-14">
            <div className="absolute top-1 left-1 bg-gray-700 rounded-full shadow-md w-full h-full p-3"></div>
            <div className="relative z-10 bg-white border border-gray-700 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-3 h-full w-full hover:bg-red-100">
              <div className="flex items-center space-x-2"></div>

              <a
                href="mailto:kenangarayev@gmail.com?Subject=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/email.svg" alt="gmail" className="opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
