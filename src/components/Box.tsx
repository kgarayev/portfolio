import Image from "next/image";

interface BoxProps {
  title: string;
  description: string;
  tag: string;
  buttonText: string;
  imageLink: string;
}

const Box: React.FC<BoxProps> = ({
  title,
  description,
  tag,
  buttonText,
  imageLink,
}) => {
  return (
    <div className="relative min-w-[225px] max-w-[600px] mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform">
        <div className="flex items-center space-x-2 mb-4 mt-4 ml-4">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
        <div className="border-t-2 border-black mb-4"></div>

        <div className="m-4 font-nunito p-2">
          <h2 className="text-xl font-bold font-ibmPlexMono">{title}</h2>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={imageLink}
              alt="image"
              className=" border-2 mt-2 mb-2 object-cover aspect-content"
            />
          </div>

          <p className="mt-2">{description}</p>
          <div className="mt-2 flex items-center justify-around ">
            <div className="flex items-center gap-2 h-full cursor-pointer hover:opacity-50 font-bold ">
              <Image
                src="/github.svg"
                alt="github"
                className="w-6 h-6"
                width={6}
                height={6}
              />
              <a className="">github repo</a>
            </div>

            <div className="flex items-center gap-2 h-full cursor-pointer hover:opacity-50 font-bold ">
              <Image
                src="/internet.svg"
                alt="internet"
                className="w-6 h-6"
                width={6}
                height={6}
              />
              <a className="">live preview</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
