import { useState } from "react";
import { formatNumberWithSuffix } from "../utils/useCase";
import { PiBellSimpleRingingDuotone } from "react-icons/pi";
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from "react-icons/bi";

const DetailVideo = ({ info, Theme }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [click, setClick] = useState(false);
  const [likebtn, setLikeBtn] = useState(false);
  const [dislikebtn, setDisLikeBtn] = useState(false);
  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  const title = info[0]?.snippet?.localized?.title;
  const channelTitle = info[0]?.snippet?.channelTitle;
  const subscriptions = formatNumberWithSuffix(
    info[1]?.statistics?.subscriberCount
  );
  const img = info[1]?.snippet?.thumbnails?.default?.url;
  let like = formatNumberWithSuffix(info[0]?.statistics?.likeCount);
  if (like === 0) {
    like = (Math.random() * 1000).toFixed(0);
  }
  const view = formatNumberWithSuffix(info[0]?.statistics?.viewCount);
  const description = info[0]?.snippet?.localized?.description;
  const publishedAt = info[0]?.snippet?.publishedAt;
  const a = new Date(publishedAt);
  const date =
    a.constructor().split(" ")[1] +
    " " +
    a.constructor().split(" ")[2] +
    " " +
    a.constructor().split(" ")[3];

  return (
    <>
      <p className="py-2 font-semibold">{title}</p>
      <div className="flex">
        <img alt="channelImg" src={img} className="h-10 p-1" />
        <div className="px-2">
          <p className="font-bold">{channelTitle}</p>
          <p className="text-sm"> {subscriptions} subscribers </p>
        </div>
        {!click ? (
          <button
            className={`px-3 m-2 pb-1  ${
              !Theme ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
            }`}
            onClick={() => setClick(true)}
          >
            <span className="text-base">Subscribe </span>
          </button>
        ) : (
          <button
            className={`px-3 m-2 pb-1   ${
              !Theme ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
            }`}
            onClick={() => setClick(false)}
          >
            <div className="flex justify-between">
              <span className="text-base">subscribed </span>
              <span className="pt-1 pl-1 text-base">
                <PiBellSimpleRingingDuotone />
              </span>
            </div>
          </button>
        )}
        {!likebtn ? (
          <button
            className={` p-2 text-sm m-2 ${
              click ? "ml-[29.8rem]" : "ml-[31.7rem]"
            } flex ${
              !Theme ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
            }`}
            onClick={() => [
              setLikeBtn(true),
              dislikebtn ? setDisLikeBtn(false) : null,
            ]}
          >
            <span className="pt-1 pr-1">
              <BiLike />
            </span>

            <span>{like} </span>
          </button>
        ) : (
          <button
            className={`bg-gray-100 p-2  text-sm m-2 ${
              click ? "ml-[29.8rem]" : "ml-[31.7rem]"
            } flex ${
              !Theme ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
            }`}
            onClick={() => [setLikeBtn(false)]}
          >
            <span className="pt-1 pr-1">
              <BiSolidLike />
            </span>

            <span>{like} </span>
          </button>
        )}
        {!dislikebtn ? (
          <button
            className={`flex items-center  w-8 h-[2.2rem] mt-[0.5rem] text-sm ${
              !Theme ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
            }`}
            onClick={() => [
              setDisLikeBtn(true),
              likebtn ? setLikeBtn(false) : null,
            ]}
          >
            <span className="p-2">
              <BiDislike />
            </span>
          </button>
        ) : (
          <button
            className={`flex items-center  w-8 h-[2.2rem] mt-[0.5rem] text-sm ${
              !Theme ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
            }`}
            onClick={() => [setDisLikeBtn(false)]}
          >
            <span className="p-2">
              <BiSolidDislike />
            </span>
          </button>
        )}
      </div>
      <div
        className={`bg-gray-100 ${
          !Theme ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="flex mt-5 font-semibold">
          <p className=" p-1">{view} views</p>
          <p className="p-1">{date}</p>
        </div>
        <DescriptionforVideo
          description={description}
          isExpanded={isDescriptionExpanded}
          toggleDescription={toggleDescription}
        />
      </div>
    </>
  );
};
const DescriptionforVideo = ({
  description,
  isExpanded,
  toggleDescription,
}) => {
  // Display the description based on the isExpanded state
  const displayDescription = isExpanded
    ? description
    : description?.slice(0, 100);

  return (
    <>
      <div className="p-1 m-2 w-auto">
        {displayDescription?.split("\n").map((paragraph, index) => (
          <p className="text-xs" key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      {!isExpanded && (
        <button
          onClick={toggleDescription}
          className="text-blue-500 cursor-pointer"
        >
          Read More
        </button>
      )}
    </>
  );
};

export default DetailVideo;
