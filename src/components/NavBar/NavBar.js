import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Box } from "@mui/material";
// import { useAuthState } from "../context/hooks";
// import { useUserAuth } from "./context/UserAuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="NavContainer">
      <div>
        <div
          className="navItem"
          style={{
            height: "3.8rem",
            width: "100%",
            zIndex: "1",
            top: "0",
            left: "0px",
            position: "fixed",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow:
              "rgb(145 158 171 / 24%) 0px 0px 4px 0px, rgb(145 158 171 / 24%) 0px 24px 48px 0px",
            backgroundColor: "rgba(249, 250, 251, 0.733)",
            backdropFilter: " blur(20px)",
          }}
        >
          <Link
            to={"/Dashboard"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1
              style={{
                cursor: "pointer",
              }}
            >
              Social
            </h1>
          </Link>

          <div
            style={{
              border: "1px solid #717273",
              borderRadius: "15px",
              outline: "none",
              width: "15rem",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              class: ":hover{backgroundColor:green;}",
            }}
          >
            <SearchIcon style={{ cursor: "pointer", padding: "2px" }} />
            <input
              type={"text"}
              placeholder="Search"
              style={{
                border: "none",
                outline: "none",
                height: "2rem",
                fontSize: "15px",
                backgroundColor: "transparent",
              }}
            ></input>
          </div>
          <div>
            {user && (
              <>
                {/* <span>{user.email}</span> */}
                <span>{user.displayName}</span>
              </>
            )}
          </div>

          <div>
            <ul style={{ display: "flex", gap: "25px", listStyleType: "none" }}>
              <li style={{ cursor: "pointer" }}>
                <Link to={"/Dashboard"}>
                  <HomeOutlinedIcon style={{ color: "#63666A" }} />
                </Link>
              </li>
              <li style={{ cursor: "pointer" }}>
                <Link to={"/Profile"}>
                  <AccountCircleOutlinedIcon style={{ color: "#63666A" }} />
                </Link>
              </li>
              <li style={{ cursor: "pointer" }}>
                <Box component={Logout} onClick={() => signOut(auth)} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
