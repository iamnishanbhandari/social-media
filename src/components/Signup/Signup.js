import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, confirmPassword, name, username);
      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        {error && <Alert>{error}</Alert>}
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
            <h1>Sociakid</h1>

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
                      // ref={nameRef}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                      // ref={usernameRef}
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
                  <Link to={"/Profile"}>
                    <AccountCircleIcon
                      style={{
                        height: "90px",
                        width: "100%",
                      }}
                    />
                  </Link>
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
                  // ref={emailRef}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  // ref={passwordRef}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }} // ref={passwordConfirmRef}
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
              {/* <Link to="/Signin"> */}
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
                // disabled={loading}
                // onSubmit={handleSubmit}
              >
                Signup
              </button>
              {/* </Link> */}
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
    </Form>
  );
};

export default Signup;
