const Logo = () => {
  return (
    <div className="relative">
      {/* This is the main text */}
      <h1 className="relative z-10 text-5xl text-blue-600 font-ultra font-thin">
        Kenan
      </h1>

      {/* This is the shadow */}
      <h1 className="absolute top-[3px] left-[5px] text-5xl font-ultra font-bold">
        Kenan
      </h1>
    </div>
  );
};

export default Logo;
