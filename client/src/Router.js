import React from "react";
import { Routes, Route } from "react-router";
import Error404 from "./screens/Error404";
import Home from "./screens/Home";

const Router = () => {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default Router;
