import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelContainer, ChannelListContainer } from "./components";
import "./App.css";

const apiKey = "r34nt9zhxjzx";

const chatClient = StreamChat.getInstance(apiKey);
console.log("chatclient", chatClient);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={chatClient} theme="team light">
        <ChannelListContainer />

        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
