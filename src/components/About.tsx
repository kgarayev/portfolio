import { forwardRef } from "react";
import Image from "next/image";
import Photo from "./Photo";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="about" className="pt-2 pb-2">
      <div className="w-full p-5 pb-4">
        <h2 className="text-xl font-extrabold">About me</h2>
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

      <div className="p-5 font-nunito">
        <p className="mb-8">
          Hey, I&apos;m Kenan Garayev. I&apos;m an ex-civil engineer turned
          software developer.
        </p>
        <p className="mb-8">
          My path to software engineering was anything but linear. Starting off
          with a degree from UCL, I became a Chartered Engineer and project
          manager in civil engineering, accumulating over 7 years of experience.
          However, my passion shifted to software engineering, moving away from
          managing big construction projects. My early school days dabbling in
          Pascal, C, and Python, followed by intensive Bootcamp training, led me
          back to solving construction-related problems with new tech insights.{" "}
        </p>
        <p className="mb-8">
          In the realm of software, my skill set is extensive. I excel in both
          frontend and backend development, showing particular expertise in
          TypeScript, JavaScript, Node.js, React, and Python. Additionally,
          I&apos;m proficient in managing both SQL and NoSQL databases. I&apos;m
          all about making sure every line of code I write not only works but
          works well and lasts.
        </p>
        <p className="mb-8">
          At the Keller Group, I&apos;ve utilised these skills to enhance our
          projects and streamline operations. Yet, being a software engineer to
          me means more than coding; it&apos;s about mentoring junior engineers
          and contributing to their growth. Sharing knowledge, teaching, and
          coaching are as vital to me as building innovative software.
        </p>
        <p className="mb-8">
          When I&apos;m not coding, I love to share what I&apos;ve learned with
          people.
        </p>
        <p className="mb-8">
          I love good design, hiking camping, travel and music.
        </p>
        <h5 className="font-semibold text-lg mb-4 font-ibmPlexMono">
          Quick Facts About Me
        </h5>
        <ol className="list-decimal pl-5 flex flex-col gap-4 mb-4">
          <li>
            I started coding with Pascal when I was 12 to participate in
            competitive programming Olympiads. This was then followed up by
            undertaking lab work and creating CLI tools using C.
          </li>
          <li>
            I studied civil engineering at University College London (UCL),
            graduating in 2016.
          </li>
          <li>
            Having learnt Python and Web Development, I have been developing
            professional web apps for the past 4 years.
          </li>
          <li>
            I spent 7 years working as a Civil Engineer and Project Manager in
            the UK. I am also a Chartered Civil Engineer.
          </li>
          <li>
            I am originally from Azerbaijan. I have been in the UK for more than
            10 years.
          </li>
          <li>I speak English, Turkish, Azerbaijani and Russian.</li>
        </ol>
      </div>
    </div>
  );
});

export default About;

About.displayName = "About";
