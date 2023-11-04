import { useState, useEffect } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

type Inputs = {
  name: string;
  email: string;
  message: string;
  botcheck: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Inputs>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string | boolean>(false);

  // Please update the Access Key in the .env
  const apiKey: string =
    process.env.PUBLIC_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg: string, data: any) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg: string, data: any) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  // The type 'SubmitHandler<Inputs>' is a TypeScript type from react-hook-form that provides type-safety for your form submission.
  const submitForm: SubmitHandler<Inputs> = (data: Inputs) => onSubmit(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
              errors.name
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("name", {
              required: "Full name is required",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Your Message"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("message", {
              required: "Enter your Message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              {" "}
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
}

// import React from "react";

// const ContactForm = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event: any) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       setResult(res.message);
//     } else {
//       console.log("Error", res);
//       setResult(res.message);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>React File Upload Form</h1>
//       <form onSubmit={onSubmit}>
//         <input type="text" name="name" />
//         <input type="email" name="email" />
//         <textarea name="message"></textarea>
//         <input type="submit" />
//       </form>
//       <span>{result}</span>
//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";

// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Here you can integrate the API or backend service
//     console.log({ name, email, message });
//     // Reset form fields after submission
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="relative min-w-[225px] max-w-[800px] mx-auto w-full">
//       <div className="absolute top-1 left-1 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
//       <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl neo-brutalist transition-transform">
//         <div className="flex items-center space-x-2 mb-4 mt-4 ml-4"></div>
//         <form
//           onSubmit={handleSubmit}
//           action="https://api.web3forms.com/submit"
//           method="POST"
//         >
//           {/* <!-- REQUIRED: Your Access key here. Don't worry this can be public --> */}
//           {/* <!-- Create your Access key here: https://web3forms.com/ --> */}
//           {/* <!-- <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE"> --> */}
//           <input
//             type="hidden"
//             name="access_key"
//             value="3476fd8a-397f-488c-972c-e14d30dd748a"
//           />

//           {/* <!-- Optional: Can be type="hidden" or type="text" for subject --> */}
//           <input
//             type="hidden"
//             name="subject"
//             value="New Submission from Web3Forms"
//           />

//           {/* <!-- Optional: From Name you want to see in the email */}
//           {/* Default is "Notifications". you can overwrite here --> */}
//           <input type="hidden" name="from_name" value="Portfolio Website" />

//           {/* <!-- Optional: To send the form submission as CC email --> */}
//           {/* <input type="hidden" name="ccemail" value="partner@example.com" /> */}

//           {/* <!-- Optional: default replyto will be "email" (if available),  */}
//           {/* you may overwrite here --> */}
//           {/* <input type="hidden" name="replyto" value="customer@example.com" /> */}

//           {/* <!-- Required: if submitting without Javascript  */}
//           {/* (because by default web3form outputs json) --> */}

//           {/* <!-- If javascript, use "window.location.hash" for redirects --> */}
//           <input
//             type="hidden"
//             name="redirect"
//             value="https://web3forms.com/success"
//           />

//           {/* <!-- Optional: But Recommended: To Prevent SPAM Submission.  */}
//           {/* Make sure its hidden by default --> */}
//           <input type="checkbox" name="botcheck" id="" className="hidden" />

//           <div className="m-4 font-nunito flex flex-col gap-5 p-2">
//             <div>
//               <h3 className="font-ibmPlexMono font-semibold text-lg">Name</h3>
//               <input
//                 className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md h-12"
//                 placeholder="Rick Sanchez"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 type="text"
//               />
//             </div>
//             <div>
//               <h3 className="font-ibmPlexMono font-semibold text-lg">Email</h3>
//               <input
//                 className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md h-12"
//                 placeholder="you@example.com"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <h3 className="font-ibmPlexMono font-semibold text-lg">
//                 Message
//               </h3>
//               <textarea
//                 className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
//                 placeholder="Hello there..."
//                 rows={8}
//                 style={{ resize: "none" }}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </div>
//             <div className="w-full flex justify-center font-ibmPlexMono font-bold">
//               <button
//                 type="submit"
//                 className="h-12 border-black border-2 p-2.5 bg-emerald-100 hover:bg-emerald-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-emerald-300 rounded-md w-32"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
