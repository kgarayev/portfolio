import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center relative h-full w-full">
      <div className="flex justify-center absolute top-1 left-1 bg-gray-700 rounded-md h-full w-full"></div>
      <div className="flex justify-center relative z-10 rounded-md bg-white overflow-hidden border border-gray-700 h-full w-full">
        <div className="w-full h-full flex items-end overflow-hidden">
          <Image
            src="/photo.jpg"
            alt="Circular Image"
            className="min-w-full h-auto"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
