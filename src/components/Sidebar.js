import React from "react"; // , { useEffect, useState }
// import { Link } from "react-router-dom";
import { sideNavCategories, sidenavSubscriptions } from "./constants";
import { Stack, Box, Divider } from "@mui/material";
import "../index.css";
import { useSelector } from "react-redux";

const Sidebar = (setSelectedCategory) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // this is called early return...,    else i can use ternary in component return
  const sidebarOptions = (list) =>
    list.map((category) => {
      return (
        <button
          className="category-btn"
          // onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span style={{ width: "3rem" }}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      );
    });

  if (!isMenuOpen) return null;
  return (
    <Box
      style={{
        width: "14rem",
        alignItems: "flex-start",
        backgroundColor: " rgb(229 231 235) ",
      }}
    >
      {isMenuOpen ? (
        <Stack
          direction="column"
          sx={{
            overflow: "auto",
            flexDirection: { md: "column" },
            marginTop: "1rem",
          }}
        >
          {sidebarOptions(sideNavCategories)}
          <Divider variant="middle" style={{ margin: "10px " }} />
          {sidebarOptions(sidenavSubscriptions)}
        </Stack>
      ) : // <div className="p-5 shadow-md w-48">
      //   <ul>
      //     <li>
      //       <Link>Home</Link>
      //     </li>
      //     <li>Shorts</li>
      //     <li>Videos</li>
      //     <li>Live</li>
      //   </ul>
      //   <hr></hr>
      // <h1 className="font-bold mt-3">Subscriptions</h1>
      //   <ul>
      //     <li>Music</li>
      //     <li>Sports</li>
      //     <li>Gaming</li>
      //     <li>Movies</li>
      //   </ul>
      //   <hr></hr>
      //   <h1 className="font-bold  mt-3">Watch Later</h1>
      //   <ul>
      //     <li>Music</li>
      //     <li>Sports</li>
      //     <li>Gaming</li>
      //     <li>Movies</li>
      //   </ul>
      //   </div>
      null}
    </Box>
  );
};

export default Sidebar;
