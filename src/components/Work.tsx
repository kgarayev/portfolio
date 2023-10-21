import Box from "./Box";

const Work = () => {
  return (
    <div>
      {" "}
      <div className="p-8">
        <Box
          title="Hello"
          description="My project."
          tag="Hey"
          buttonText="Link"
        />
      </div>
    </div>
  );
};

export default Work;
