import React from "react";
import Navbar from "../../components/Navbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import ProfileCard from "../../components/ProfileCard";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 px-12">
        <div className="mt-16 flex gap-10">
          <div className="w-[20%]">
            <DashboardSidebar 
            active="profile"
            />
          </div>

          <div className="w-[80%]">
            
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
