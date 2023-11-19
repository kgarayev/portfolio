import React, { useEffect, useState } from "react";
import axios from "axios";

import * as dotenv from "dotenv";
dotenv.config();

function ContactForm() {
  const [result, setResult] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // This function will clear the result when clicking anywhere on the page
  const clearResult = () => {
    setResult("");
  };

  useEffect(() => {
    // Attach the event listener for clicks on the window object
    window.addEventListener("click", clearResult);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener("click", clearResult);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const onSubmit = async (event: any) => {
    event.preventDefault();

    setMessageColor("bg-yellow-50");

    setResult("Validating...");

    const formData = new FormData(event.target);

    // Get individual field values
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Check if any of the fields are empty
    if (!name.trim() || !email.trim() || !message.trim()) {
      setMessageColor("bg-red-50");
      setResult("Please complete the form in full.");
      return;
    }

    // If all fields are filled, proceed to set the result to "Sending..."
    setMessageColor("bg-yellow-50");
    setResult("Sending...");

    try {
      const response = await axios({
        method: "post",
        url: "api/submitForm",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        console.log("Success", response.data);
        setMessageColor("bg-emerald-50");
        setResult("Thank you! Your message has been sent.");
        setName(""); // Resetting the state which will clear the form
        setEmail("");
        setMessage("");
      } else {
        console.log("Error", response.data);
        setMessageColor("bg-red-50");
        setResult("Something went wrong. Your message was not sent.");
        setName(""); // Resetting the state which will clear the form
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && !error.response) {
        // Network error (no response received) or CORS error
        // console.log("Network or CORS error: ", error.message);
        setMessageColor("bg-emerald-50");
        setResult(
          "Thank you! Your message has been sent. If you don't receive a response, please contact me directly. You can find my email below."
        );
        setName(""); // Resetting the state which will clear the form
        setEmail("");
        setMessage("");
      } else if (axios.isAxiosError(error)) {
        // Other axios errors with a response
        console.log("Axios error message: ", error.message);
        setMessageColor("bg-red-50");
        setResult("An error occurred while sending the form!");
        setName(""); // Resetting the state which will clear the form
        setEmail("");
        setMessage("");
        if (error.response) {
          // Handle the response error
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // Handle errors that occur before response (like no internet)
          console.log(error.request);
        } else {
          // Handle other errors
          console.log("Error", error.message);
        }
      } else if (error instanceof Error) {
        // Handle non-Axios errors
        console.log("Unexpected error", error.message);
        setMessageColor("bg-red-50");
        setResult("An unexpected error occurred!");
        setName(""); // Resetting the state which will clear the form
        setEmail("");
        setMessage("");
      } else {
        // Handle cases where error is not an instance of Error (very rare)
        console.log("An unexpected error occurred", error);
        setMessageColor("bg-red-50");
        setResult(
          "An unexpected error occurred and we're unable to identify it."
        );
        setName(""); // Resetting the state which will clear the form
        setEmail("");
        setMessage("");
      }
    }
  };

  return (
    <div className="relative min-w-[225px] max-w-[800px] mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-700 rounded-2xl shadow-md w-full h-full"></div>
      <div className="relative z-10 bg-white border border-gray-700 rounded-2xl neo-brutalist transition-transform">
        <form onSubmit={onSubmit}>
          {/* <div className="flex items-center space-x-2 mb-4 mt-4 ml-4"></div> */}
          {/* <!-- REQUIRED: Your Access key here. Don't worry this can be public --> */}
          {/* <!-- Create your Access key here: https://web3forms.com/ --> */}
          {/* <!-- <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE"> --> */}
          <input
            type="hidden"
            name="access_key"
            value="3476fd8a-397f-488c-972c-e14d30dd748a"
          />

          {/* <!-- Optional: Can be type="hidden" or type="text" for subject --> */}
          <input
            type="hidden"
            name="subject"
            value="New Submission from Web3Forms"
          />

          {/* <!-- Optional: From Name you want to see in the email */}
          {/* Default is "Notifications". you can overwrite here --> */}
          <input type="hidden" name="from_name" value="Portfolio Website" />

          {/* <!-- Optional: To send the form submission as CC email --> */}
          {/* <input type="hidden" name="ccemail" value="partner@example.com" /> */}

          {/* <!-- Optional: default replyto will be "email" (if available),  */}
          {/* you may overwrite here --> */}
          {/* <input type="hidden" name="replyto" value="customer@example.com" /> */}

          {/* <!-- Required: if submitting without Javascript  */}
          {/* (because by default web3form outputs json) --> */}

          {/* <!-- If javascript, use "window.location.hash" for redirects --> */}
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />

          {/* <!-- Optional: But Recommended: To Prevent SPAM Submission.  */}
          {/* Make sure its hidden by default --> */}
          <input type="checkbox" name="botcheck" id="" className="hidden" />

          <div className="m-3 font-nunito flex flex-col gap-3 p-2 justify-center">
            <div>
              <h3 className="font-ibmPlexMono font-semibold text-lg">Name</h3>
              <input
                className="w-full border-gray-700 border p-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md h-12"
                placeholder="Rick Sanchez"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <h3 className="font-ibmPlexMono font-semibold text-lg">Email</h3>
              <input
                className="w-full border-gray-700 border p-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md h-12"
                placeholder="you@example.com"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <h3 className="font-ibmPlexMono font-semibold text-lg">
                Message
              </h3>
              <textarea
                className="resize-y w-full border-gray-700 border p-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                placeholder="Hello there..."
                rows={6}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-center font-ibmPlexMono font-bold">
              <button
                type="submit"
                className="h-12 border-gray-700 border p-2  hover:bg-emerald-100 hover:shadow-[2px_2px_0px_rgba(50,50,50,1)] active:bg-emerald-200 rounded-md w-full bg-emerald-50"
              >
                Send
              </button>
            </div>
            <div
              className={`text-center font-semibold ${messageColor} inline-block m-0 p-0`}
            >
              {result === "" ? <></> : result}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
