import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import GlobalStorage from "../Storage/ContextProvider";

const DashboardSidebar = ({ active }) => {
  const navigate = useNavigate();
  const { userProfile } = useContext(GlobalStorage);

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
      <div className="block w-full max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white shadow-md">
        {userProfile?.role === "business" && (
          <>
            <div
              className={` ${
                active === "uploadCompany" ? "border-b-4 border-blue-600" : ""
              } border-opacity-100 p-4   dark:border-white/10 hover:border-b-4 hover:border-blue-600`}
            >
              <Link to="/dashboard">Upload Company Details</Link>
            </div>

            <div
              className={` ${
                active === "yourCompany" ? "border-b-4 border-blue-600" : ""
              }  w-full hover:border-b-4 hover:border-blue-600 border-opacity-100 px-4 py-3  dark:border-white/10 6`}
            >
              <Link to="/dashboard/getCompany">Your Company</Link>
            </div>
          </>
        )}

        <ul className="w-full">
          <div
            className={` ${
              active === "profile" ? "border-b-4 border-blue-600" : ""
            }  w-full hover:border-b-4 hover:border-blue-600 border-opacity-100 px-4 py-3  dark:border-white/10 6`}
          >
            <Link to="/dashboard/profile">Profile</Link>
          </div>

          <div
            className={` ${
              active === "partnership" ? "border-b-4 border-blue-600" : ""
            }  w-full hover:border-b-4 hover:border-blue-600 border-opacity-100 px-4 py-3  dark:border-white/10 6`}
          >
            <Link to="/dashboard/partnership">Partnership</Link>
          </div>

          <div
            className={` ${
              active === "chat" ? "border-b-4 border-blue-600" : ""
            }  w-full hover:border-b-4 hover:border-blue-600 border-opacity-100 px-4 py-3  dark:border-white/10 6`}
          >
             <Link to="/dashboard/chat">Chat with Owners</Link>
          </div>


          <li
            className="w-full px-4 py-3 cursor-pointer"
            onClick={handlesignout}
          >
            Signout
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;
