import React, { useRef, useEffect } from "react";
import UserMsg from "./UserMsg";
import BotMsg from "./BotMsg";
import Video from "./Video";
import Lottie from "lottie-react";
import { allMsgsAtom, loaderAtom } from "../utils/atoms";
import loaderAnimation from '../assets/Loader.json'
import { useAtom } from "jotai";

function Messages(props) {
  const [allMsgs, setAllMsgs] = useAtom(allMsgsAtom)
  const [loader, setLoader] = useAtom(loaderAtom)
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [allMsgs]);

  return (
    <div className="font-normal pb-20 w-full">
      {
        props?.link && <Video embedId={props?.link} />
      }
      {
        allMsgs?.map((msg, index) => {
          return (
            msg?.type === 'user' ? <UserMsg key={index} msg={msg} isLatest={index == (allMsgs?.length - 1)} /> : <BotMsg msg={msg} isLatest={index == (allMsgs?.length - 1)} key={index} />
          )
        })
      }
      {/* <div className="w-9/12 lg:w-5/12 flex items-center justify-start">
        
      </div> */}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Messages;
