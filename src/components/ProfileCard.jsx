import React, { useContext, useEffect, useState } from "react";
import { IoLocation } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";
import GlobalStorage from "../Storage/ContextProvider";

const ProfileCard = () => {
  const { userProfile, setUserProfile } = useContext(GlobalStorage);

  return (
    <>
      <div className="flex justify-end">
        <Link
          to="/dashboard/edit-profile"
          className=" px-5 py-2 bg-yellow-400 text-white rounded-md"
        >
          Edit Profile
        </Link>
      </div>
      <div className="flex justify-center items-center w-[83%] flex-col ">
        <h2 className=" font-[600] text-[40px] ml-9 mb-2">
          {userProfile?.name}
        </h2>
        <div className="flex items-center ml-6 text-gray-400 font-[600] text-[18px]">
          {" "}
          <IoLocation className="mr-2" /> {userProfile?.location}
        </div>
        <br /> <br />
        <div className="flex items-center ml-6 text-gray-400 font-[600] text-[17px]">
          <MdMarkEmailUnread className="mr-2" />
          {userProfile?.email}
        </div>
        <div className="flex items-center ml-6 mt-2 text-gray-400 font-[600] text-[17px] ">
          <TbWorldWww className="mr-2" /> {userProfile?.website}
        </div>
      </div>
      <div className="border-b border-gray-300 w-[100%] pt-14"></div>

      <div className="flex flex-col justify-center items-center w-full px-14 mt-7">
        <p className="text-center">{userProfile?.bio}</p>
      </div>
    </>
  );
};

export default ProfileCard;
