const TopContacts = () => {
  const phoneNumber = "+447472219991";

  return (
    <>
      <div className="flex gap-2">
        <div className="border h-12 w-full max-w-32 rounded-md flex justify-center items-center flex-col text-sm">
          <a href={`tel:${phoneNumber}`} className="">
            call me
          </a>
          <button>copy number</button>
        </div>
        <div className="border h-12 w-full max-w-32 rounded-md">World</div>
      </div>
    </>
  );
};

export default TopContacts;
