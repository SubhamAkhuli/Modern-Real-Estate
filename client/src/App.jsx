import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
