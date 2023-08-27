import React, { useRef, useEffect } from "react";
import UserMsg from "./UserMsg";
import BotMsg from "./BotMsg";
import Video from "./Video";
import { allMsgsAtom } from "../utils/atoms";
import { useAtom } from "jotai";

function Messages(props) {
  const [allMsgs, setAllMsgs] = useAtom(allMsgsAtom)
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [allMsgs]);

  return (
    <div className="font-normal pb-20">
      {
        props?.link && <Video embedId={props?.link} />
      }
      {
        allMsgs?.map((msg, index) => {
          return (
            msg?.type === 'user' ? <UserMsg msg={msg} isLatest={index == (allMsgs?.length - 1)} /> : <BotMsg msg={msg} isLatest={index == (allMsgs?.length - 1)} />
          )
        })
      }
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Messages;
