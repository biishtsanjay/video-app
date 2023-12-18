import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={info?.snippet?.thumbnails.medium.url}
        alt="thumbnail"
      ></img>
      <ul className="px-2">
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
