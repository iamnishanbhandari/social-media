// import "./App.css";
// import Signin from "./components/Signin/Signin";
// import Signup from "./components/Signup/Signup";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Profile from "./components/Profile/Profile";
// import { UserAuthContextProvider } from "./components/context/UserAuthContext";

// function App() {
//   return (
//     <>
//       <UserAuthContextProvider>
//         <Router>
//           <Routes>
//             <Route exact path="/" element={<Signup />}></Route>
//             <Route exact path="/Signin" element={<Signin />}></Route>
//             <Route exact path="/Dashboard" element={<Dashboard />}></Route>
//             <Route exact path="/Profile" element={<Profile />}></Route>
//           </Routes>
//         </Router>
//       </UserAuthContextProvider>
//     </>
//   );
// }

// export default App;

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import Signin from "./components/Signin/Signin";
import Profile from "./components/Profile/Profile";
import { Navigate } from "react-router-dom";
import Article from "./components/Dashboard/Article";
import Articles from "./components/Dashboard/Articles";
import AddArticle from "./components/Dashboard/Addarticle";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Router>
              <Routes>
                <Route
                  path="/Dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Signin />} />
                {/* <Route path="/" element={<Navigate replace to="/Signin" />} /> */}

                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/article/:id" element={<Article />} />
                <Route
                  path="/"
                  element={
                    <div>
                      <div>
                        <Articles />
                      </div>
                      <div>
                        <AddArticle />
                      </div>
                    </div>
                  }
                />
              </Routes>
            </Router>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
