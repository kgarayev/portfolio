import { Routes, Route, useNavigate } from "react-router-dom";

const Interface = () => {
  return (
    <>
      <div className={"font-nunito"}>
        Hello World
        {/* includes routes here  */}
      </div>

      {/* <Routes>
        <Route path="/" element={<Welcome />} />

        <Route
          path="/register"
          element={<Template component={registerComponent} />}
        />
      </Routes> */}
    </>
  );
};

export default Interface;
