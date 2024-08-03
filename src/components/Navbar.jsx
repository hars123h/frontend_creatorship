import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import axios from "axios";
import BASE_URL from "../baseUrl";
import { getCookie, isAuth } from "../auth/helper";
import GlobalStorage from "../Storage/ContextProvider";
import cookie from "js-cookie";

const Navbar = ({ bgcolor }) => {
  const [isMobileExpand, setIsMobileExpand] = useState(false);
  const { userProfile, setUserProfile, refreshProfile, setRefreshProfile } =
    useContext(GlobalStorage);
  const navigate = useNavigate();
  const token = getCookie("token");
  useEffect(() => {
    getUserProfile();
  }, [refreshProfile]);

  const getUserProfile = async () => {
    const getProfile = await axios({
      method: "GET",
      url: `${BASE_URL}/user/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("get User Profile", response);
        setUserProfile(response?.data);
      })
      .catch((error) => {
        console.log("get user profile  Error", error?.response);
      });
  };

  const handlesignout = () => {
    if (window !== "undefined") {
      cookie.remove("token", {
        expires: 1,
      });
    }
    if (window !== "undefined") {
      localStorage.removeItem("user");
    }
    navigate("/login");
    // window.location.reload();
  };
  return (
    <>
      <nav className={`bg-[${bgcolor}]`}>
        <div className="px-[90px] py-[25px] flex items-center justify-between bg-transparent">
          <Link to="/" className="">
            <img className="w-[180px]" src={Logo} alt="" />
          </Link>
          <div className="flex items-center gap-10  ">
            <Link to="/" className="text-white text-sm font-[500]">
              Home
            </Link>
            <Link to="/about" className="text-white text-sm font-[500]">
              About
            </Link>

            <Link to="/companies" className="text-white text-sm font-[500]">
              All Companies
            </Link>

            {!isAuth() && (
              <>
                <Link
                  to="/login"
                  className="px-[32px] py-[6px] bg-transparent border border-white rounded-md  transition  duration-400 ease-in  hover:bg-white hover:text-black "
                >
                  <span>Login</span>
                </Link>
                <Link
                  to="/"
                  className="px-[32px] py-[6px]  border hover:border-white hover:bg-transparent hover:text-white rounded-md transition  duration-400 ease-in bg-white text-black "
                >
                  <span>Register</span>
                </Link>
              </>
            )}

            {isAuth() && (
              <>
                <Link to="/dashboard" className="text-white text-sm font-[500]">
                  Dashboard
                </Link>

                <p
                  className="text-white text-sm font-[500] cursor-pointer"
                  onClick={handlesignout}
                >
                  Signout
                </p>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
