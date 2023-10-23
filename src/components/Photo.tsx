const Photo = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-1 left-1 bg-black rounded-full w-full h-full "></div>
      <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-2">
        <img
          src="/profile2.jpg"
          alt="Circular Image"
          className="w-full h-full transform scale-110 translate-y-1"
        />
      </div>
    </div>
  );
};

export default Photo;
