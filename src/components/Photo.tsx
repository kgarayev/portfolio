const Photo = () => {
  return (
    <div className="h-full">
      <div className="w-24 h-24 rounded-full overflow-hidden">
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
