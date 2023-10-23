import Photo from "./Photo";

const Intro = () => {
  return (
    <div className="p-5 mt-5">
      <h1 className="mb-5 text-2xl font-bold">I am a Software Engineer.</h1>
      <p className="mb-5">
        With a strong foundation in computer science and extensive expertise in
        solving real-world problems, I specialise in backend and frontend
        development using Node.js, React, Python, C, and both SQL and NoSQL
        databases.
      </p>
      <div>
        <Photo></Photo>
      </div>
    </div>
  );
};

export default Intro;
