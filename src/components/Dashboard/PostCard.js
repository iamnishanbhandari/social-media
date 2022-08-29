import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
const PostCard = () => {
  return (
    <div style={{ height: "80vh" }}>
      <div
        style={{
          position: "relative",
          top: "100px",
          width: "35vw",
          minHeight: "70vh",
          maxHeight: "fit-content",
          margin: "auto",
          boxShadow: "0px 0px 8px  #0001",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            <AccountCircleIcon style={{ fontSize: "80px", color: "grey" }} />
            <p style={{ fontWeight: "bold" }}>Hello world</p>
          </div>
          <div style={{ paddingRight: "20px" }}>
            <MoreVertIcon />
          </div>
        </div>
        <div className="status">
          <p style={{ paddingLeft: "90px", marginTop: "-5px" }}>
            Hello This is caption
          </p>
        </div>
        <div style={{ width: "fit-content", margin: "auto" }}>
          <img
            src="https://media.istockphoto.com/photos/patan-picture-id637696304?k=20&m=637696304&s=612x612&w=0&h=GqmMtggU2LgHWcXPFNxMrZg9dtPzyrnl9ek5oARcI7Y="
            alt="postimg"
            style={{ maxHeight: "40vh", maxWidth: "100%" }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "25px",
            gap: "15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>1</p>
            <ThumbUpOffAltIcon style={{ cursor: "pointer" }} />
          </div>
          <div>
            <ForumOutlinedIcon style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div
          style={{
            outline: "1px solid #6fbbd3",
            borderRadius: "15px",
            width: "80%",
            display: "flex",
            justifyContent: "start",
            marginLeft: "30px",
          }}
        >
          <input
            type={"text"}
            placeholder="Type Here!!!"
            style={{
              width: "100%",
              outline: "none",
              border: "none",
              fontSize: "15px",
              marginLeft: "10px",
            }}
          ></input>
          <NearMeOutlinedIcon
            style={{ cursor: "pointer", paddingRight: "5px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
