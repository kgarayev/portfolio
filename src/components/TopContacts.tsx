const TopContacts = () => {
  const phoneNumber = "+447472219991";

  return (
    <>
      <div className="flex gap-2">
        <div className="border h-12 w-full max-w-32 rounded-md">
          <a href={`tel:${phoneNumber}`}>Call Me</a>
        </div>
        <div className="border h-12 w-full max-w-32 rounded-md">World</div>
      </div>
    </>
  );
};

export default TopContacts;
