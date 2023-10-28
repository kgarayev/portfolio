const ContactForm = () => {
  return (
    <div className="relative min-w-[225px] max-w-[600px] mx-auto w-full">
      <div className="absolute top-1 left-1 bg-gray-800 rounded-2xl shadow-md w-full h-full"></div>
      <div className="relative z-10 bg-white border-2 border-gray-800 rounded-2xl neo-brutalist hover:-translate-y-1 hover:-translate-x-1 transition-transform">
        <div className="flex items-center space-x-2 mb-4 mt-4 ml-4"></div>

        <div className="m-4 font-nunito">
          <h3>Name</h3>
          <input
            className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
            placeholder="you@example.com"
          />
          <h3>Email</h3>
          <input
            className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
            placeholder="you@example.com"
          />
          <h3>Message</h3>
          <input
            className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
            placeholder="you@example.com"
          />
          <button className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
            Medium Rounded Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
