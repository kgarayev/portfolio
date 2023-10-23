import Photo from "./Photo";

const Intro = () => {
  return (
    <div className="p-5">
      <p className="mb-5">Hi, my name is Kenan.</p>
      <h1 className="mb-5 text-2xl font-bold">I am a Software Engineer.</h1>
      <p className="mb-5">
        With a wealth of expertise in solving real-world problems and with a
        strong foundation in computer science, my proficiency lies in utilising
        Node.js, React, Python, C, SQL and NoSQL for backend and frontend
        development.
      </p>
      <div>
        <Photo></Photo>
      </div>
    </div>
  );
};

export default Intro;
