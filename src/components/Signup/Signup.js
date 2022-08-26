import React, { useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
const nameRef = React.createRef();
const usernameRef = React.createRef();
const emailRef = React.createRef();
const passwordRef = React.createRef();
const passwordConfirmRef = React.createRef();

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let usernames = [];
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (
      !passwordRef.current.value ||
      !emailRef.current.value ||
      !passwordConfirmRef.current.value
    )
      return setError("Please fill the required details.");

    if (usernames.include(usernameRef.current.value))
      return setError("Username already taken");
    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      return setError("Password do not match");

    try {
      setError("");
      setLoading(true);
      await Signup(
        usernameRef.current.value,
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch {
      setError("Failed to create an account");

      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="signup-container"
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
            height: "60vh",
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
              // outline: "1px solid green",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              margin: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <div>
                <div
                  style={{
                    margin: "10px",
                    width: "150px",
                    height: "35px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#E8F0FE",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="Name"
                    ref={nameRef}
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
                    width: "150px",
                    height: "35px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#E8F0FE",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="UserName"
                    required
                    ref={usernameRef}
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
              </div>
              <div style={{ fontSize: "30px" }}>
                <AccountCircleIcon
                  style={{
                    height: "90px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
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
                ref={emailRef}
                style={{
                  outline: "none",
                  border: "none",
                  height: "35px",
                  maxWidth: "200px",
                  margin: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  textAlign: "center",
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
                type={showPassword ? "text" : "password"}
                placeholder="Type password Here!!"
                required
                ref={passwordRef}
                style={{
                  // outline: "1px solid",
                  border: "none",
                  height: "35px",
                  minWidth: "210px",
                  textAlign: "center",
                  borderRadius: "10px",
                  background: "transparent",
                }}
              ></input>
              <button
                style={{
                  tabIndex: "-1",
                  backgroundColor: "transparent",
                  border: "none",
                  marginTop: "5px",
                }}
                onClick={handlePasswordVisibility}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
              </button>
            </div>
            <div
              style={{
                outline: "none",
                margin: "10px",
                width: "250px",
                height: "35px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#E8F0FE",
                border: "none",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password Here!!"
                required
                ref={passwordConfirmRef}
                style={{
                  outline: "none",
                  border: "none",
                  height: "35px",
                  minWidth: "210px",
                  textAlign: "center",
                  borderRadius: "10px",
                  background: "transparent",
                }}
              ></input>
              <button
                onClick={handlePasswordVisibility}
                style={{
                  tabIndex: "-1",
                  backgroundColor: "transparent",
                  border: "none",
                  marginTop: "5px",
                }}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
              </button>
            </div>
          </div>

          <div style={{}}>
            <Link to="/Signin">
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
                  marginTop: "30px",
                }}
                disabled={loading}
                onSubmit={handleSubmit}
              >
                Signup
              </button>
            </Link>
          </div>
        </div>
        <p style={{ position: "absolute", marginTop: "500px" }}>
          Already Have an Account?
          <Link to={"/Signin"}>
            <span style={{ color: "purple", cursor: "pointer" }}>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
