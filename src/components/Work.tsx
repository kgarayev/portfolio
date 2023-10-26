import Box from "./Box";

const Work = () => {
  return (
    <div>
      <div className="w-full text-center">
        <h2 className="text-xl font-bold">Work</h2>
      </div>
      <div className="mb-16 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-5">
        <Box
          title="Hello"
          description="My project."
          tag="Hey"
          buttonText="Link"
        />
        <Box
          title="Hello"
          description="My project."
          tag="Hey"
          buttonText="Link"
        />
        <Box
          title="Hello"
          description="My project."
          tag="Hey"
          buttonText="Link"
        />
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
