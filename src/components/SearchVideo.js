import React from "react";

const SearchVideo = ({ info, flag, Theme }) => {
  const { snippet } = info; //statistics
  const { thumbnails, title, channelTitle } = snippet; //publishedAt
  return (
    <div
      className={`${
        flag === "X" ? "w-[350px] relative overflow-hidden" : "w-[500px]"
      }  shadow-md overflow-hidden ${
        !Theme
          ? "text-white hover:bg-gray-600 bg-gray-800 "
          : "hover:bg-gray-100 text-black"
      } my-3`}
    >
      <div className="flex p-4">
        <img
          className={` ${flag === "X" ? "h-14 w-18" : "h-20 w-40"} mr-4`}
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <div>
          <p className={`${flag === "X" ? "text-xs " : ""}font-bold`}>
            {title}
          </p>
          <p
            className={`${!Theme ? "text-white" : "text-black"} ${
              flag === "X" ? "text-xs " : ""
            }`}
          >
            {channelTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideo;
