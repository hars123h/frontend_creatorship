import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import GlobalStorage from "../Storage/ContextProvider";

const UserDashboard = () => {
    const {userProfile} = useContext(GlobalStorage)
  return (
    <>
      <Navbar />

      <div>
        <p>{userProfile?.name}</p>
      </div>
    </>
  );
};

export default UserDashboard;
