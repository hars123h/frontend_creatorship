import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import GlobalStorage from "../../Storage/ContextProvider";
import axios from "axios";
import BASE_URL from "../../baseUrl";
import { getCookie, isAuth } from "../../auth/helper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { userProfile, setUserProfile, refreshProfile, setRefreshProfile } =
    useContext(GlobalStorage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const token = getCookie("token");
  const navigate = useNavigate();

  useEffect(() => {
    setName(userProfile?.name);
    setEmail(userProfile?.email);
    setBio(userProfile?.bio);
    setLocation(userProfile?.location);
    setWebsite(userProfile?.website);
  }, []);
 
  useEffect(() => {
    if(!isAuth()) {
      navigate("/login")
    }

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      location,
      website,
      bio,
    };
    const createCompany = await axios({
      method: "PUT",
      url: `${BASE_URL}/user/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then((response) => {
        console.log("Profile Update Success", response);
        toast.success("Profile Updated");
        setRefreshProfile(!refreshProfile);
        // navigate("/dashboard/profile");
      })
      .catch((error) => {
        console.log("Profile Update  Error", error?.response);
        toast.error(error.response.data);
      });
  };

  return (
    <>
      <Navbar />

      <div className="mt-5 px-12">
        <div className="mt-16 flex gap-10">
          {/* <div className="w-[20%]">
            <DashboardSidebar />
          </div> */}

          <div className="w-[100%]">
            <h2 className="text-[30px] font-[600] mb-4">Update Profile</h2>
            <div className="">
              {" "}
              <p className="mb-2"> Name</p>
              <input
                type="text"
                className="mb-6 bg-[#34364F] rounded-md w-full h-[45px] px-3"
                placeholder="Your Name"
                autocomplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="">
              {" "}
              <p className="mb-2"> Email</p>
              <input
                type="email"
                className="mb-6 bg-[#34364F] rounded-md w-full h-[45px] px-3"
                placeholder="Email"
                autocomplete="off"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              {" "}
              <p className="mb-2">Bio</p>
              <textarea
                name=""
                id=""
                className="mb-6  min-h-[100px] bg-[#34364F] rounded-md w-full h-[45px] px-3 py-2"
                placeholder="Write some Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>

            <div className="">
              {" "}
              <p className="mb-2">Location</p>
              <input
                type="text"
                className="mb-6  bg-[#34364F] rounded-md w-full h-[45px] px-3"
                placeholder="Location"
                autocomplete="off"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="">
              {" "}
              <p className="mb-2">Website</p>
              <input
                type="text"
                className="mb-6 bg-[#34364F] rounded-md w-full h-[45px] px-3"
                placeholder="Enter your website url"
                autocomplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <button
              className="bg-yellow-400 px-14 py-3 text-white mb-5 rounded-full"
              onClick={(e) => handleSubmit(e)}
            >
              Update Profile{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
