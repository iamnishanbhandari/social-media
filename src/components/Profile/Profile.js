import React from "react";
import NavBar from "../NavBar/NavBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import PostCounts from "./PostsCount/PostCounts";
import "../Profile/Profile.css";
import Connections from "./Connections/Connections";
const Profile = () => {
  return (
    <div>
      <NavBar />
      <div
        className="body"
        style={{
          position: "absolute",
          top: "70px",
          left: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <AccountCircleIcon style={{ fontSize: "150px", color: "grey" }} />
        </div>
        <div style={{ display: "flex", marginTop: "-40px" }}>
          <ProfileDetails />
          <div>
            <PostCounts />
          </div>
        </div>
        <Connections />
      </div>
    </div>
  );
};

export default Profile;
