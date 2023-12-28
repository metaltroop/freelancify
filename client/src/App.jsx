import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {  useState } from "react";

import Landing from "./pages/Landing/Landing";
import Hire from "./pages/HireFreelancers/Hire";
import Signin from "./pages/Login/Signin";
import Signup from "./pages/Register/Signup";

function App() {
  const location = useLocation();
  const [direction, setDirection] = useState("forward");

  return (
    <div className="min-h-screen w-[100%]">
      <Routes location={location}>
        <Route
          path="/Signin"
          element={<Signin direction={direction} setDirection={setDirection} />}
        />
        <Route
          path="/Signup"
          element={
            <Signup direction={direction} setDirection={setDirection} />
          }
        />
        <Route path="/Landing" element={<Landing />} />

        <Route path="/hire" element={<Hire/>} />
        <Route path="/" element={<Navigate to="/landing" state={{ direction: "forward" }} />} />
      </Routes>
    </div>
// mmmm
  );
}



export default App;
