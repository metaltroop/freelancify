import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

import Logo from '../assets/with-text.png';

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.toLowerCase() === "/login";
  const isRegisterPage = location.pathname.toLowerCase() === "/register";
  const isSigninupPage = location.pathname.toLowerCase() === "/signinup";
  const isSigninPage = location.pathname.toLowerCase() === "/signin";
  const isSginupPage = location.pathname.toLowerCase()==="/signup"

  if (isLoginPage) {
    return null; // Hide the Navbar on the Login page
  }
  if (isRegisterPage) {
    return null; // Hide the Navbar on the Login page
  }
  if (isSigninupPage) {
    return null; // Hide the Navbar on the Login page
  }
  if (isSigninPage) {
    return null; // Hide the Navbar on the Login page
  }
  if (isSginupPage){
    return null;
  }


  return (
    <nav className="bg-[#ffffffd8] border-opacity-25 rounded-full flex justify-between items-center fixed w-[90%] z-20 shadow-xl mt-4 ml-28">
      <div>
        <img src={Logo} alt="logo" className="w-20px h-20"/>
      </div>
      <div className="border-gray-900">
        <ul className="font-medium flex gap-10 p-4  rounded-lg">
          <li><Link to="/" className="text-gray-700 ">Home</Link></li>
          <li><Link to="/" className="text-gray-700">Find Freelancers</Link></li>
          <li><ScrollLink to="aboutus" spy={true} smooth={true} duration={500} className="text-gray-700">About Us</ScrollLink></li>
          <li><ScrollLink to="contactus" spy={true} smooth={true} duration={500} className="text-gray-700"> Contact  Us</ScrollLink></li>
        </ul>
      </div>
      <div className="flex justify-between items-center mr-6">
        <ul className="flex gap-3">
          <li>
            <Link to="/signup" className="rounded-full bg-blue-500 text-white px-4 py-2">Register</Link>
          </li>
          <li>
            <Link to="/signin" className="rounded-full bg-green-500 text-white px-4 py-2">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
