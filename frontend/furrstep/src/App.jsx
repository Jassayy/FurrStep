import { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Goals from "./pages/Goals";
import Rewards from "./pages/Rewards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
     const [isAuthenticated, setIsAuthenticated] = useState(false);
     return (
          <Router>
               <Navbar
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated}
               />
               <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route
                         path="/login"
                         element={
                              <Login setIsAuthenticated={setIsAuthenticated} />
                         }
                    />
                    <Route
                         path="/signup"
                         element={
                              <SignUp setIsAuthenticated={setIsAuthenticated} />
                         }
                    />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/rewards" element={<Rewards />} />
               </Routes>
          </Router>
     );
}

export default App;
