import React from "react";

const NavBar = () => {
  return (
    <div className="NavContainer">
      <div>
        <div className="navItem" style={{ display: "flex" }}>
          <h1>Social</h1>
          <div>
            <input type={"text"} placeholder="Search"></input>
          </div>
          <div>
            <ul>
              <li>home</li>
              <li>profile</li>
              <li>exit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
