const ToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex justify-center m-4 mb-20 md:mb-6">
      <div
        onClick={scrollToTop}
        className="flex justify-center gap-2 items-center cursor-pointer hover:underline hover:font-bold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
        <p className="font-semibold w-full text-center hover:font-bold">
          back to top
        </p>
      </div>
    </div>
  );
};

export default ToTop;
