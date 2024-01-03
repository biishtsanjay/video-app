import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const CommentsShow = ({ info, Theme }) => {
  const { snippet } = info;
  const { topLevelComment } = snippet;
  const { authorDisplayName, authorProfileImageUrl, textOriginal } = snippet;

  // State variable to track whether replies should be visible
  const [showReplies, setShowReplies] = useState(false);

  // Function to toggle the visibility of replies
  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div>
      <div className={`flex p-1 mt-2 shadow-md ${!Theme && "bg-black"}`}>
        {snippet?.topLevelComment ? (
          <>
            <img
              className="p-1  w-10 h-10"
              alt="authorProfileImageUrl"
              src={topLevelComment?.snippet?.authorProfileImageUrl}
            />
            <div className="px-2 py-2">
              <p className="font-semibold text-sm">
                {topLevelComment?.snippet?.authorDisplayName}
              </p>
              <p className="text-sm">
                {topLevelComment?.snippet?.textOriginal}
              </p>
            </div>
          </>
        ) : (
          <>
            <img
              className="p-1  w-10 h-10"
              alt="authorProfileImageUrl"
              src={authorProfileImageUrl}
            />
            <div className="px-2">
              <p className="font-semibold text-sm">{authorDisplayName}</p>
              <p className="text-sm"> {textOriginal}</p>
            </div>
          </>
        )}
      </div>

      {snippet?.totalReplyCount > 0 && !showReplies ? (
        <button className="text-blue-600 flex ml-20" onClick={toggleReplies}>
          <span className="pt-1 pr-1">
            {" "}
            <AiFillCaretDown />{" "}
          </span>
          {info?.replies?.comments?.length === 1 ? (
            <span>{info?.replies?.comments?.length} reply</span>
          ) : (
            <span>{info?.replies?.comments?.length} replies</span>
          )}
        </button>
      ) : (
        snippet?.totalReplyCount > 0 && (
          <button className="text-blue-600 flex ml-20" onClick={toggleReplies}>
            <span className="pt-1 pr-1">
              {" "}
              <AiFillCaretUp />{" "}
            </span>{" "}
            {info?.replies?.comments?.length === 1 ? (
              <span>{info?.replies?.comments?.length} reply</span>
            ) : (
              <span>{info?.replies?.comments?.length} replies</span>
            )}
          </button>
        )
      )}

      {showReplies && (
        <div className="pl-5 ml-10 border">
          {/* Loop through and display replies here */}
          {info?.replies?.comments.map((reply) => (
            <div key={reply.id}>
              <img
                className="p-1  w-10 h-10"
                alt="authorProfileImageUrl"
                src={reply?.snippet?.authorProfileImageUrl}
              />
              <div className="px-2">
                <p className="font-semibold text-sm">
                  {reply?.snippet?.authorDisplayName}
                </p>
                <p className="text-sm">{reply?.snippet?.textOriginal}</p>
                {/* You can add additional styling or content for each reply here */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsShow;
