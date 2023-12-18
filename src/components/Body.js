import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Body = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory]);

  return (
    <div className="flex">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Outlet />
    </div>
  );
};

export default Body;
