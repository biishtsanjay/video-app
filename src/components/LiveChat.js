import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const liveChatInterval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(liveChatInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chatSubmitHandler = () => {
    dispatch(
      addMessage({
        name: "Superman",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chatInfo, index) => (
          <ChatMessage
            key={index}
            name={chatInfo?.name}
            message={chatInfo?.message}
          />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          chatSubmitHandler();
        }}
      >
        <input
          className="w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="mx-2 px-2 py-1 border border-black rounded-md
         bg-green-400 "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
