import Typewriter from "./Typewriter";

const Logo = () => {
  return (
    <div className="relative h-12 mb-0">
      {/* This is the main text */}
      <h1 className="relative z-10 text-4xl text-emerald-200 font-poppins font-extrabold text-outline">
        Kenan
        {/* <Typewriter text="Kenan" delay={600} infinite={true} /> */}
      </h1>
      {/* This is the shadow */}
      <h1 className="absolute top-[2px] left-[2px] text-4xl font-poppins font-extrabold">
        Kenan
      </h1>
    </div>
  );
};

export default Logo;
