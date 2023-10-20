import { Routes, Route, useNavigate } from "react-router-dom";
import MainTemplate from "./MainTemplate";

const Interface = () => {
  return (
    <>
      <div>
        Hello World
        <MainTemplate />
        {/* include routes here  */}
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
