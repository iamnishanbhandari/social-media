import "./App.css";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
// import NavBar from "./components/NavBar/NavBar";
// import AuthProvider from "./components/context/AuthContext";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      {/* <Profile /> */}
      <Dashboard />
      {/* <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Signup />}></Route>
            <Route exact path="/Signin" element={<Signin />}></Route>
            <Route exact path="/Dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Router>
      </AuthProvider> */}
    </>
  );
}

export default App;
