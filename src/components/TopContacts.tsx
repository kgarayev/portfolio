const TopContacts = () => {
  const phoneNumber = "+447472219991";

  return (
    <>
      <div className="flex gap-2">
        <div className="border h-16 w-full max-w-32 rounded-md flex justify-center items-center text-sm gap-2">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-between gap-2">
            {" "}
            <a
              href={`tel:${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border"
            >
              call
            </a>
            <button className="border">copy</button>
          </div>
        </div>
        <div className="border h-16 w-full max-w-32 rounded-md flex justify-center items-center text-sm gap-2">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-between gap-2">
            {" "}
            <a
              href="mailto:kenangarayev@gmail.com?Subject=Hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              message
            </a>
            <button>copy</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContacts;
