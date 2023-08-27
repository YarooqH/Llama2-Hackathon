import React from "react";
import UserMsg from "./UserMsg";
import BotMsg from "./BotMsg";
import Video from "./Video";

function Messages(props) {
  return (
    <div className="font-normal">
      {
        props?.link && <Video embedId={props?.link} />
      }
      <UserMsg />
      <BotMsg />
    </div>
  );
}

export default Messages;
