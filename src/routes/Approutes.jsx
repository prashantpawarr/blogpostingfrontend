import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CommonRoute from "../components/CommonRoute";
import PageNotFound from "../pages/PageNotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Approutes;
