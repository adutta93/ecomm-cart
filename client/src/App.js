import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelContainer, ChannelListContainer } from "./Components";
import "./styles/styles.css";

const apiKey = "q588ffhphduj";
const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelContainer />
        <ChannelListContainer />
      </Chat>
    </div>
  );
}

export default App;
