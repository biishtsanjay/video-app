import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Obama",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Obama",
        text: "lorem ipsum dolor sit amet",
        replies: [
          { name: "Obama", text: "lorem ipsum dolor sit amet", replies: [] },
        ],
      },
      { name: "Obama", text: "lorem ipsum dolor sit amet", replies: [] },
      { name: "Obama", text: "lorem ipsum dolor sit amet", replies: [] },
    ],
  },
  { name: "Obama", text: "lorem ipsum dolor sit amet", replies: [] },
];
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
