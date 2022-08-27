import React from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
const PostCounts = () => {
  return (
    <div
      style={{
        outline: "1px solid #0D59BD",
        borderRadius: "15px",
        width: "50px",
        height: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        backgroundColor: "#DEECF9",
        color: "#0D59BD",
      }}
    >
      <p>3</p>
      <DynamicFeedIcon />
    </div>
  );
};

export default PostCounts;
