import Image from "next/image";
import { forwardRef } from "react";
import ContactForm from "./ContactForm";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      id="contact"
      className="pt-6 pb-24 flex flex-col justify-center items-center w-full md:pb-10 flex-grow-1 lg:pt-0"
    >
      <div className="w-full p-5 pb-4">
        <h2 className="text-xl font-extrabold">Get in touch</h2>
      </div>

      <div className="mb-4 p-5 pt-0 w-full lg:pt-6 lg:h-full">
        <ContactForm></ContactForm>
      </div>

      <div className="flex items-center gap-1 max-w-[500px] w-3/4">
        <div className="relative mx-auto  h-14 w-14">
          <div className="absolute top-1 left-1 bg-gray-700 rounded-full shadow-md w-full h-full p-3"></div>
          <div className="relative z-10 bg-white border border-gray-700 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-3 h-full w-full hover:bg-blue-100">
            <div className="flex items-center space-x-2"></div>

            <a href="https://www.linkedin.com/in/garayevk/" target="_blank">
              <img src="/linkedin2.svg" alt="linkedin" className="opacity-70" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto  h-14 w-14">
          <div className="absolute top-1 left-1 bg-gray-700 rounded-full shadow-md w-full h-full p-3"></div>
          <div className="relative z-10 bg-white border border-gray-700 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-3 h-full w-full hover:bg-stone-200">
            <div className="flex items-center space-x-2"></div>

            <a href="https://github.com/kgarayev" target="_blank">
              <img src="/github2.svg" alt="github" className="opacity-70" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-14 w-14">
          <div className="absolute top-1 left-1 bg-gray-700 rounded-full shadow-md w-full h-full p-3"></div>
          <div className="relative z-10 bg-white border border-gray-700 rounded-full neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform p-3 h-full w-full hover:bg-red-100">
            <div className="flex items-center space-x-2"></div>

            <a
              href="mailto:kenangarayev@gmail.com?Subject=Hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/email.svg" alt="gmail" className="opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;

Contact.displayName = "Contact";
