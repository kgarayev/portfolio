import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center relative h-full w-full">
      <div className="flex justify-center absolute top-1 left-1 bg-black rounded-full h-full w-full"></div>
      <div className="flex justify-center relative z-10 rounded-full overflow-hidden border border-2 h-full w-full">
        <Image
          src="/profile2.jpg"
          alt="Circular Image"
          className="transform scale-110 translate-y-1 grayscale-20 brightness-105"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Photo;
