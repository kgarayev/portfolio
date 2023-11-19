import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center relative h-full w-full">
      <div className="flex justify-center absolute top-1 left-1 bg-gray-700 rounded-md h-full w-full"></div>
      <div className="flex justify-center relative z-10 rounded-md bg-white overflow-hidden border border-gray-700 border h-full w-full">
        <Image
          src="/profile2.jpg"
          alt="Circular Image"
          className="transform scale-110 translate-y-1 grayscale-20 brightness-105 opacity-80"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Photo;
