import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import Landing from "./pages/Landing/Landing";
import Hire from "./pages/HireFreelancers/Hire";
import Signin from "./pages/Login/Signin";
import Signup from "./pages/Register/Signup";
// import Dashboard from "./pages/dashboard/Dashbard";
// import Protected from "./component/Protected";
import { UserContextProvider } from "./UserContext";
import Dashbard from "./pages/dashboard/Dashbard";
import PrivateRoutes from "./auth/PrivateRoutes";
import UserDashboard from "./pages/dashboard/UserDashboard";
import Profile from "./pages/Userdashboard/Profile";
import Skills from "./pages/Userdashboard/Skills";
import ContactInfo from "./pages/Userdashboard/ContactInfo";
// import { UserContextProvider } from "./UserContext";

function App() {
  const location = useLocation();
  const [direction, setDirection] = useState("forward");

  return (
    <div className="min-h-screen w-[100%]">
      <UserContextProvider>
        <Routes location={location}>
          <Route
            path="/Signin"
            element={
              <Signin direction={direction} setDirection={setDirection} />
            }
          />
          <Route
            path="/Signup"
            element={
              <Signup direction={direction} setDirection={setDirection} />
            }
          />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/hire" element={<Hire />} />
          
          <Route element={<PrivateRoutes />}>
              <Route path='/admindashboard' element={<Dashbard />} />
          </Route>
          <Route
            path="/"
            element={
              <Navigate to="/landing" state={{ direction: "forward" }} />
            }
          />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<UserDashboard/>}>
                <Route path="/dashboard" element={<Profile />} />
                {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
                <Route path="/dashboard/Skills" element={<Skills />} />
                <Route path="/dashboard/Contactinfo" element={<ContactInfo />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>

    // mmmm
  );
}

export default App;
