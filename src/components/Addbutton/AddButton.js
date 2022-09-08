import React from "react";
import AddIcon from "@mui/icons-material/Add";

const AddButton = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "1400px",
          top: "600px",
          position: "fixed",
        }}
      >
        <button
          style={{
            borderRadius: "35px",
            border: "none",
            height: "60px",
            width: "60px",
            cursor: "pointer",
            backgroundColor: "#FFFFFF",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <AddIcon style={{ color: "blue", fontSize: "35px" }} />
        </button>
      </div>
    </div>
  );
};

export default AddButton;
