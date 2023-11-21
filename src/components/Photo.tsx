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

      <div className="pl-5 pr-5 w-full ">
        <div className="relative max-w-[450px] max-h-[450px] mx-auto">
          <div className="absolute top-1.5 left-1 bg-gray-700 rounded-2xl shadow-md aspect-w-1 aspect-h-1 w-full max-w-3xl overflow-hidden "></div>
          <div className="aspect-w-1 aspect-h-1 w-full max-w-3xl overflow-hidden relative border-2 relative z-10 bg-white border-2 border-gray-700 rounded-2xl neo-brutalist transition-transform">
            <Image
              src="/photo.jpg"
              alt="Square Image"
              className="min-w-full min-h-full absolute bottom-0 left-0 object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
