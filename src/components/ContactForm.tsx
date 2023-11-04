import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can integrate the API or backend service
    console.log({ name, email, message });
    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="relative min-w-[225px] max-w-[800px] mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl neo-brutalist transition-transform">
        <div className="flex items-center space-x-2 mb-4 mt-4 ml-4"></div>
        <form onSubmit={handleSubmit}>
          <div className="m-4 font-nunito flex flex-col gap-5 p-2">
            <form action="https://api.web3forms.com/submit" method="POST">
              <div>
                <h3 className="font-ibmPlexMono font-semibold text-lg">Name</h3>
                <input
                  className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md h-12"
                  placeholder="Rick Sanchez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
              </div>
              <div>
                <h3 className="font-ibmPlexMono font-semibold text-lg">
                  Email
                </h3>
                <input
                  className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-emerald-50 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md h-12"
                  placeholder="you@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center font-ibmPlexMono font-bold">
                <button className="h-12 border-black border-2 p-2.5 bg-emerald-100 hover:bg-emerald-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-emerald-300 rounded-md w-32">
                  Send
                </button>
              </div>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
