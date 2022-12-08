import React, { useEffect } from "react";
import DashboardNav from "../components/navs/DashboardNav";
import ProfileCard from "../components/dashboard/ProfileCard";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("role") || !localStorage.getItem("token")) {
      navigate("/auth-error");
    }
  }, []);
  return (
    <>
      <DashboardNav />
      <ProfileCard />
    </>
  );
}

export default Profile;
