const Photo = () => {
  return (
    <div className="w-28 h-28">
      <div className="w-full h-full rounded-full overflow-hidden">
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
