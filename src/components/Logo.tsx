const Logo = () => {
  return (
    <div className="relative">
      {/* This is the main text */}
      <h1 className="relative z-10 text-6xl text-blue-600 font-ibmPlexMono font-bold">
        Kenan
      </h1>

      {/* This is the shadow */}
      <h1 className="absolute top-[4px] left-[4px] text-6xl font-ibmPlexMono font-bold">
        Kenan
      </h1>
    </div>
  );
};

export default Logo;
