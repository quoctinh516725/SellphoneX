import React from "react";
import Sidebar from "./sections/Sidebar";
import AccountContent from "./sections/ProfileDashboard";
import UserInfor from "./sections/UserInfor";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-full sm:max-w-[1400px] mx-auto p-4  space-y-4">
      <UserInfor />
      <div className="flex gap-4 ">
        <div className="w-[350px]">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
