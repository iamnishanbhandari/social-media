import React from "react";
// import NavBar from "./components/NavBar/NavBar";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import PostCard from "./PostCard";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      {/* <Profile /> */}
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </>
  );
};

export default Dashboard;
