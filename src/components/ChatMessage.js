import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-lg">
      <img
        alt="img"
        src="https://yt4.ggpht.com/ytc/AOPolaQI4Oy7cGpX9TvAMuTHNibLEcFezqoBv9W2fQ=s32-c-k-c0x00ffffff-no-rj"
      />
      <span className="font-bold p-2" style={{ minWidth: "5rem" }}>
        {name}
      </span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
