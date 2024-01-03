import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeChange, toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./constants";
import { cacheResults } from "../utils/searchSlice";
import {
  Search,
  Menu,
  Close,
  AccountCircle,
  AccountCircleOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Input, IconButton } from "@mui/material";
import { BiMoon, BiSun } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { LoginName } from "../utils/loadContext";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName] = useContext(LoginName);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const Theme = useSelector((store) => store.app.Theme);

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

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    dispatch(themeChange(isChecked));
  };
  return (
    <div
      className={`grid grid-flow-col align-middle  shadow-md justify-between fixed left-0 w-full py-3  mt-0 z-[100] ${
        !Theme ? "text-white bg-black" : "bg-white"
      }`}
    >
      <div className="flex">
        <IconButton
          onClick={() => toggleMenuHandler()}
          style={{
            cursor: "pointer",
            marginLeft: ".7rem",
            marginTop: "-.5rem",
          }}
        >
          {isMenuOpen ? (
            <Menu
              fontSize="large"
              style={{ color: !Theme ? "white" : "black" }}
            />
          ) : (
            <Close
              fontSize="large"
              style={{ color: !Theme ? "white" : "black" }}
            />
          )}
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
          className={`w-1/2 border border-gray-200 p-2  px-6 h-[2.7rem] ${
            !Theme ? "bg-white" : "white"
          }`}
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() =>
            setTimeout(() => {
              setShowSuggestions(false);
            }, 200)
          }
        />
        <button
          className={`border border-gray-200 p-2  bg-gray-200 w-16 ${
            !Theme ? "bg-black text-white" : "bg-gray-100"
          }`}
        >
          <Search style={{ color: "black" }} />
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className={`fixed bg-white w-[30rem] shadow-lg `}>
            <ul>
              {suggestions?.map((text) => (
                <Link key={text} to={"/search/" + text}>
                  <li
                    onClick={() => {
                      setSearchQuery("");
                    }}
                    className={`py-2 px-2 shadow-sm hover:bg-gray-200 text-black`}
                  >
                    <SearchOutlined style={{ margin: "0rem 1rem" }} />
                    {text}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* dark/light theme switch */}
      <div
        className="relative"
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          type="checkbox"
          className="hidden"
          id="checkbox"
          onChange={toggleCheckbox}
        />
        <label
          htmlFor="checkbox"
          className="bg-gray-300 w-12 h-7 relative p-1 cursor-pointer flex justify-between items-center "
        >
          <BiMoon style={{ color: Theme ? "white" : "black" }} />
          <BiSun style={{ color: !Theme ? "white" : "black" }} />
          <span
            className={`ball bg-white w-5 h-5  absolute  transform transition-transform ${
              isChecked ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </label>
      </div>
      <IconButton
        onClick={() => {
          navigate("/login");
        }}
      >
        {userName === "" ? (
          <AccountCircle fontSize="large" />
        ) : (
          <AccountCircleOutlined fontSize="large" />
        )}
      </IconButton>
    </div>
  );
};

export default Head;
