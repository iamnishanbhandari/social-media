import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
const NavBar = () => {
  return (
    <div className="NavContainer">
      <div>
        <div
          className="navItem"
          style={{
            height: "3.8rem",
            width: "100%",
            top: "0",
            position: "fixed",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "rgba(244, 246, 248, 0.733)",
            boxShadow:
              "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
          }}
        >
          <h1 style={{ cursor: "pointer" }}>Social</h1>
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
            <ul style={{ display: "flex", gap: "25px", listStyleType: "none" }}>
              <li style={{ cursor: "pointer" }}>
                <HomeOutlinedIcon style={{ color: "#63666A" }} />
              </li>
              <li style={{ cursor: "pointer" }}>
                <AccountCircleOutlinedIcon style={{ color: "#63666A" }} />
              </li>
              <li style={{ cursor: "pointer" }}>
                <LogoutSharpIcon style={{ color: "#B72136" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
