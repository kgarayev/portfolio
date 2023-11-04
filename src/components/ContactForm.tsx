import React from "react";
import axios from "axios";

import * as dotenv from "dotenv";
dotenv.config();

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending...");

    console.log(process.env);

    console.log("Access Key:", process.env.REACT_APP_ACCESS_KEY);

    const formData = new FormData(event.target);

    const accessKey = process.env.REACT_APP_ACCESS_KEY;

    if (!accessKey) {
      // Handle the error appropriately
      console.error("Access key is not defined in the environment variables");
      // Potentially exit the function or set an error state
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await axios({
        method: "post",
        url: "https://api.web3forms.com/submit",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        console.log("Success", response.data);
        setResult("Thank you! Your message has been sent.");
      } else {
        console.log("Error", response.data);
        setResult("Something went wrong. Your message was not sent.");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && !error.response) {
        // Network error (no response received) or CORS error
        // console.log("Network or CORS error: ", error.message);
        setResult(
          "Thank you! Your message has been sent. If you don't receive a response, please contact me directly. You can find my email below."
        );
      } else if (axios.isAxiosError(error)) {
        // Other axios errors with a response
        console.log("Axios error message: ", error.message);
        setResult("An error occurred while sending the form!");
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
        setResult("An unexpected error occurred!");
      } else {
        // Handle cases where error is not an instance of Error (very rare)
        console.log("An unexpected error occurred", error);
        setResult(
          "An unexpected error occurred and we're unable to identify it."
        );
      }
    }
  };

  return (
    <div className="relative min-w-[225px] max-w-[800px] mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl neo-brutalist transition-transform">
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

          <div className="m-4 font-nunito flex flex-col gap-5 p-2 justify-center">
            <div>
              <h3 className="font-ibmPlexMono font-semibold text-lg">Name</h3>
              <input
                className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md h-12"
                placeholder="Rick Sanchez"
                type="text"
                name="name"
              />
            </div>
            <div>
              <h3 className="font-ibmPlexMono font-semibold text-lg">Email</h3>
              <input
                className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md h-12"
                placeholder="you@example.com"
                type="email"
                name="email"
              />
            </div>
            <div>
              <h3 className="font-ibmPlexMono font-semibold text-lg">
                Message
              </h3>
              <textarea
                className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                placeholder="Hello there..."
                rows={8}
                style={{ resize: "none" }}
                name="message"
              />
            </div>
            <div className="w-full flex justify-center font-ibmPlexMono font-bold">
              <button
                type="submit"
                className="h-12 border-black border-2 p-2.5 bg-emerald-100 hover:bg-emerald-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-emerald-300 rounded-md w-32"
              >
                Send
              </button>
            </div>
            <div className="w-full">{result}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
