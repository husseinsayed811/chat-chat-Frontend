import { useState } from "react";
import Chatbox from "../Componants/ChatComponants/Chatbox";
import MyChats from "../Componants/ChatComponants/MyChats";
import SideDrawer from "../Componants/ChatModels/SideDrawer";
import { ChatState } from "../ChatContext/ChatContext";

const Chat = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
        }}
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </div>
    </div>
  );
};

export default Chat;
