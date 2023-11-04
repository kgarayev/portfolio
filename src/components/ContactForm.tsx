import React from "react";

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "3476fd8a-397f-488c-972c-e14d30dd748a");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="App">
      <h1>React File Upload Form</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <input type="submit" />
      </form>
      <span>{result}</span>
    </div>
  );
}

export default ContactForm;

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
