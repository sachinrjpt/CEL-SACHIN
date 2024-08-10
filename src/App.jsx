import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import User from "./User";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;