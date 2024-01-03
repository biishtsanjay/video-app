import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 ">
      <img
        style={{ width: "2rem", height: "2rem" }}
        src="https://yt4.ggpht.com/ytc/AOPolaQI4Oy7cGpX9TvAMuTHNibLEcFezqoBv9W2fQ=s32-c-k-c0x00ffffff-no-rj"
        alt="avatar"
      />
      <div className="px-3">
        <p className="font-bold ">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
