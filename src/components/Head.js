import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./constants";
import { cacheResults } from "../utils/searchSlice";
import { Search, Menu, Close, AccountCircle } from "@mui/icons-material";
import { Input, IconButton } from "@mui/material";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        searchQuery !== "" && getSearchSuggestions();
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col align-middle py-3 my-2 shadow-md justify-between bg-white sticky top-0">
      <div className="flex">
        <IconButton
          onClick={() => toggleMenuHandler()}
          style={{
            cursor: "pointer",
            marginLeft: "1.5rem",
            marginTop: "-.5rem",
          }}
        >
          {isMenuOpen ? <Menu fontSize="large" /> : <Close fontSize="large" />}
        </IconButton>
        <a href="/">
          <img
            className="h-7 ml-10 mt-2"
            alt="yt_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png"
          />
        </a>
      </div>
      <div className="col-span-8 ml-10">
        <Input
          className="w-1/2 border border-gray-200 p-2 rounded-l-xl px-6 h-[2.7rem]"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-200 p-2 rounded-r-xl bg-gray-200 w-16">
          <Search />
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed bg-white py-2 px-5 w-[30rem] shadow-lg rounded-lg">
            <ul>
              {suggestions?.map((sgst) => (
                <li
                  key={sgst}
                  className="py-2 px-2 shadow-sm hover:bg-gray-200"
                >
                  {sgst}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        {/* <img
          className="h-8 mr-6"
          alt="user"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        /> */}
        <IconButton>
          <AccountCircle fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Head;
