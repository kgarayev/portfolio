import { forwardRef } from "react";
import Image from "next/image";
import Photo from "./Photo";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="about" className="pt-2 pb-0 w-full flex-grow-1">
      <div className="w-full p-5 pb-4 pt-4">
        <h2 className="text-xl font-extrabold">About me</h2>
      </div>

      <div className="sm2:flex">
        <div className="pl-5 pr-5 w-full flex-grow-1 flex-end hidden">
          <div className="relative min-w-[300px] max-w-[600px] max-h-[600px] flex justify-center items-center">
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

        <div className="flex-grow-1 w-full flex-start">
          <div className="p-5 pb-0 mb-0 font-nunito ">
            <p className="mb-4">
              Hey, I&apos;m Kenan Garayev. I&apos;m an experienced software
              developer, project manager, and a civil engineer.
            </p>
            <p className="mb-4">
              I excel in both frontend and backend development, with particular
              expertise in TypeScript/JavaScript, Python and Go. Additionally,
              I&apos;m proficient in building and managing both SQL and NoSQL
              databases. I&apos;m all about making sure every line of code I
              write not only works but works well and lasts.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0 mt-0 font-nunito">
        <p className="mb-4">
          When I&apos;m not coding, I love to share what I&apos;ve learned with
          people.
        </p>
        <p className="mb-6">
          I love good design, hiking, camping, travelling, and music.
        </p>
        <h5 className="font-bold text-md mb-4 font-ibmPlexMono">
          Quick Facts About Me
        </h5>
        <ol className="list-decimal pl-5 flex flex-col gap-4 mb-4">
          <li>
            I started coding with Pascal when I was 12 to participate in
            competitive programming Olympiads. This was then followed up by
            creating CLI tools using C.
          </li>
          <li>
            I studied civil engineering at University College London (UCL),
            graduating in 2016. I also hold an MBA.
          </li>
          <li>
            I have been developing professional apps for a variety of clients
            for the past 5 years.
          </li>
          <li>
            I spent 6 years working as a Civil Engineer and Project Manager in
            the UK. I am also a Chartered Civil Engineer.
          </li>
          <li>
            I am originally from Azerbaijan and have been in the UK for more than 10 years.
          </li>
          <li>I speak English, Turkish, Azerbaijani, and Russian.</li>
        </ol>
      </div>
    </div>
  );
});

export default About;

About.displayName = "About";
