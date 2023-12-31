import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { UserContext } from "../UserContext";
import Logo from "../assets/with-text.png";

const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3001/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch("http://localhost:3001/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const email = userInfo?.email;

  return (
    <nav className="bg-[#ffffffd8] border-opacity-25 rounded-full flex justify-between items-center fixed w-[90%] z-20 shadow-xl mt-4 ml-28">
      <div>
        <img src={Logo} alt="logo" className="w-20px h-20" />
      </div>
      <div className="border-gray-900">
        <ul className="font-medium flex gap-10 p-4 rounded-lg">
          <li>
            <Link to="/" className="text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/freelancers" className="text-gray-700">
              Find Freelancers
            </Link>
          </li>
          <li>
            <ScrollLink
              to="aboutus"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-700 cursor-pointer"
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contactus"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-700 cursor-pointer"
            >
              Contact Us
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center mr-6">
        <ul className="flex gap-3">
          {email && (
            <>
              <a className="rounded-full bg-blue-500 text-white px-4 py-2" onClick={logout}>Logout</a>
            </>
          )}
          {!email && (
            <>
              <Link
                to="/signup"
                className="rounded-full bg-blue-500 text-white px-4 py-2"
              >
                Register
              </Link>
              <Link
                to="/signin"
                className="rounded-full bg-green-500 text-white px-4 py-2"
              >
                Login
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
