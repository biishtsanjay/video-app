import React from "react";
import { formatNumberWithSuffix, formatTime } from "../utils/useCase";

const VideoCard = ({ info, live }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  let Days = formatTime(publishedAt);
  let viewCount = 0;
  if (info?.statistics?.viewCount) {
    viewCount = formatNumberWithSuffix(statistics.viewCount);
  }

  return (
    <div className="shadow-l p-2 m-2 w-[295px]">
      <div className="relative">
        <img alt="thumbnail" src={thumbnails.medium.url} />
      </div>

      <ul>
        <li className="font-bold py-2 text-sm">{title}</li>
        <li className="font-mono text-sm">{channelTitle}</li>
        <div className="flex justify-between text-sm font-mono">
          <li>{viewCount} views </li>
          {Days > 30 ? (
            Math.ceil(Days / 30.44) === 1 ? (
              <span>{Math.ceil(Days / 30.44)} Month ago</span>
            ) : (
              <span>{Math.ceil(Days / 30.44)} Months ago</span>
            )
          ) : Math.ceil(Days) === 1 ? (
            <span>{Math.ceil(Days)} day ago</span>
          ) : (
            <span>{Math.ceil(Days)} days ago</span>
          )}
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
