import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form, Alert } from "react-bootstrap";
// import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const [showpassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);

      navigate("/Dashboard");
    } catch (err) {
      // toast(err.code, { type: "error" });
      setError(err.message);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>{error && <Alert>{error}</Alert>}</div>
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
                paddingTop: "5px",
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                <span
                  onClick={handlePasswordVisibility}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {showpassword ? <VisibilityIcon /> : <VisibilityOff />}
                </span>
              </div>
            </div>
            <div style={{}}>
              <button
                type="submit"
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
            </div>
          </div>
          <p style={{ position: "absolute", top: "500px" }}>
            Don't have an Account?{" "}
            <Link to={"/signup"}>
              <span style={{ color: "purple", cursor: "pointer" }}>
                Create one{" "}
              </span>
            </Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default Signin;
