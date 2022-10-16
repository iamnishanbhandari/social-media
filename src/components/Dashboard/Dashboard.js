import React from "react";
import AddButton from "../Addbutton/AddButton";
// import NavBar from "./components/NavBar/NavBar";
import NavBar from "../NavBar/NavBar";
// import Profile from "../Profile/Profile";
import Article from "./Article";
import Articles from "./Articles";
import AddArticle from "./Addarticle";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <AddArticle />

      {/* <Profile /> */}
      {/* <Article /> */}
      <Articles />
    </>
  );
};

export default Dashboard;
