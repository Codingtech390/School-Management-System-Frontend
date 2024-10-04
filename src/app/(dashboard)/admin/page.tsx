import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* Left side */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent " />
          <UserCard type="staff" />
        </div>
      </div>
      {/* Right side */}
      <div className="w-full lg:w-1/3">Right Side</div>
    </div>
  );
};

export default AdminPage;
