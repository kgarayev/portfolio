import Image from "next/image";
import { forwardRef } from "react";
import ContactForm from "./ContactForm";
import { useState } from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const phoneNumber = "+44 7472 219991";
  const email = "kenangarayev@gmail.com";

  const [phoneCopyStatus, setPhoneCopyStatus] = useState("");
  const [emailCopyStatus, setEmailCopyStatus] = useState("");

  const copyToClipboard = async (item: string) => {
    try {
      await navigator.clipboard.writeText(
        item === "phone" ? phoneNumber : email
      );

      if (item === "phone") {
        setPhoneCopyStatus("copied");
      } else if (item === "email") {
        setEmailCopyStatus("copied");
      }
    } catch (e) {
      console.error("Failed to copy.");

      if (item === "phone") {
        setPhoneCopyStatus("failed to copy");
      } else if (item === "email") {
        setEmailCopyStatus("failed to copy");
      }
    }

    setTimeout(() => {
      setEmailCopyStatus("");
      setPhoneCopyStatus("");
    }, 600);
  };

  return (
    <div
      ref={ref}
      id="contact"
      className="pt-6 pb-6 flex flex-col justify-center items-center w-full md:pb-10 md:pt-2 flex-grow-1"
    >
      <div className="w-full p-5 pb-4">
        <h2 className="text-xl font-extrabold">Get in touch</h2>

        <div className="font-nunito mt-6">
          You could reach me at:
          <div className="flex gap-2 items-center mt-6">
            <a
              href={`tel:${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:underline hover:font-semibold w-[135px]"
            >
              {phoneNumber}
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer hover:opacity-50"
              onClick={() => {
                copyToClipboard("phone");
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>

            <p className="font-thin text-sm">{phoneCopyStatus}</p>
          </div>
          <div className="flex gap-2 items-cente mt-2 mb-6">
            <a
              href="mailto:kenangarayev@gmail.com?Subject=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:underline hover:font-semibold w-[190px]"
            >
              {email}
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer hover:opacity-50"
              onClick={() => {
                copyToClipboard("email");
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>

            <p className="font-thin text-sm">{emailCopyStatus}</p>
          </div>
          Alternatively, feel free to fill out the form below or connect with me
          on LinkedIn and GitHub, links provided below.
        </div>
      </div>

      <div className="mb-4 p-5 pt-0 w-full lg:pt-6 lg:h-full">
        <ContactForm></ContactForm>
      </div>

      {/* <div className="flex items-center gap-1 max-w-[500px] w-3/4">
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
      </div> */}
    </div>
  );
});

export default Contact;

Contact.displayName = "Contact";
