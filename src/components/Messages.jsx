import React from "react";
import UserMsg from "./UserMsg";
import BotMsg from "./BotMsg";

function Messages() {
  return (
    <div className="font-normal">
      <UserMsg />
      <BotMsg />
    </div>
  );
}

export default Messages;
