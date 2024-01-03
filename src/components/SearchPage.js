/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "./constants";
import SearchVideo from "./SearchVideo";
import { useSelector } from "react-redux";
import { SearchPageShimmer } from "./Shimmer";

const SearchPage = () => {
  const { id } = useParams();
  const [searchList, setsearchList] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const Theme = useSelector((store) => store.app.Theme);

  useEffect(() => {
    getsearchList();
  }, [id]);

  const getsearchList = async () => {
    const searchData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${id}%2023&key=${YOUTUBE_API_KEY}`
    );
    const data = await searchData.json();
    setsearchList(data.items);
  };

  return (
    <>
      <div>{!searchList.length && <SearchPageShimmer />}</div>
      <div
        className={`flex flex-col items-center  ${
          !isMenuOpen ? "ml-[5rem]" : "ml-[12rem]"
        } p-16`}
      >
        {searchList &&
          searchList.map((search) => (
            <Link to={"/watch?v=" + search.id.videoId} key={search.id.videoId}>
              <SearchVideo info={search} Theme={Theme} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default SearchPage;
