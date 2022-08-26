import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
const Signin = () => {
  const [showpassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };
  return (
    <>
      <div
        className="sign-container"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/sandesh-stumble.appspot.com/o/blender2.jpg?alt=media&token=358efdb6-0218-46e4-815a-f30653b64d7e)`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            borderRadius: "15px",
            width: "350px",
            height: "38vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(249, 250, 251, 0.733)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1
            style={{
              paddingTop: "20px",
            }}
          >
            Sociakid
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "120px",
              width: "100%",
              margin: "5px",
            }}
          >
            <div
              style={{
                // outline: "1px solid navy",
                margin: "10px",
                width: "250px",
                height: "35px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#E8F0FE",
              }}
            >
              <input
                type={"email"}
                placeholder="Type Email Here!!"
                required
                style={{
                  outline: "none",
                  border: "none",
                  height: "35px",
                  maxWidth: "200px",
                  margin: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                }}
              ></input>
            </div>
            <div
              style={{
                margin: "10px",
                width: "250px",
                height: "35px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#E8F0FE",
              }}
            >
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Type password Here!!"
                required
                style={{
                  outline: "none",
                  border: "none",
                  height: "35px",
                  maxWidth: "200px",
                  margin: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                }}
              ></input>
              <button
                onClick={handlePasswordVisibility}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {showpassword ? <VisibilityIcon /> : <VisibilityOff />}
              </button>
            </div>
          </div>
          <div style={{}}>
            <Link to={"/Dashboard"}>
              <button
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "15px",
                  height: "35px",
                  width: "150px",
                  cursor: "pointer",
                  backgroundColor: "#CA0C22",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Signin
              </button>
            </Link>
          </div>
        </div>
        <p style={{ position: "absolute", top: "500px" }}>
          Don't have an Account?{" "}
          <Link to={"/"}>
            <span style={{ color: "purple", cursor: "pointer" }}>
              Create one{" "}
            </span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signin;
