import Typewriter from "./Typewriter";

const Logo = () => {
  return (
    <div className="relative h-12 mb-2">
      {/* This is the main text */}
      <h1 className="relative z-10 text-5xl text-emerald-200 font-ultra font-thin text-outline">
        <Typewriter text="Kenan" delay={500} infinite={true} />
      </h1>
      {/* This is the shadow */}
      <h1 className="absolute top-[3px] left-[5px] text-5xl font-ultra font-bold">
        Kenan
      </h1>
    </div>
  );
};

export default Logo;
