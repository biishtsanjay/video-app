import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Body = () => {
  const isOnline = useOnline();
  const Theme = useSelector((store) => store.app.Theme);
  if (!isOnline) {
    return (
      <div className="flex items-center ml-[30rem] mt-60">
        <h1 className="font-bold text-2xl">
          OFFLINE!! Please check your internet connection 😥
        </h1>
      </div>
    );
  }
  return (
    <div className={`flex ${!Theme ? "bg-black" : ""}`}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
