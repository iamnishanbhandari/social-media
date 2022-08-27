import React from "react";

const Connections = () => {
  return (
    <div
      style={{
        width: "250px",
        display: "flex",
        alignItem: "center",
        gap: "30px",
        position: "absolute",
        top: "100px",
        left: "150px",
      }}
    >
      <p>
        <span style={{ fontWeight: "bold", padding: "4px" }}>500</span>
        Followers
      </p>
      <p>
        <span style={{ fontWeight: "bold", padding: "4px" }}>130</span>
        Followers
      </p>
    </div>
  );
};

export default Connections;
