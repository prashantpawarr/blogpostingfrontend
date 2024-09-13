import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CommonRoute from "../components/CommonRoute";
import PageNotFound from "../pages/PageNotFound";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Approutes;
