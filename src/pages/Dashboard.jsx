import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatLayout from "../components/ChatLayout";
import Navbar from "../components/Navbar";
import "../App.css";
import Messages from "../components/Messages";
import Input from "../components/Input";
import LetsChat from "../components/LetsChat";
import { allMsgsAtom, captionsAtom, loaderAtom } from "../utils/atoms";
import { useAtom } from "jotai";
import { useUser, UserButton } from "@clerk/clerk-react";
import { fetchPost } from "../utils/api";
import axios from "axios";

function Dashboard() {
  const [link, setLink] = useState("");
  const [videoId, setVideoId] = useState("");
  const [showError, setShowError] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [allMsgs, setAllMsgs] = useAtom(allMsgsAtom);
  const [captions, setCaptions] = useAtom(captionsAtom)
  const [captionFound, setCaptionFound] = useState(true)
  const [loader, setLoader] = useAtom(loaderAtom)
  const { isSignedIn, user, isLoaded } = useUser();

  async function getYouTubeVideoId(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    let matchText = "";
    var bodyFormData = new FormData();

    if (match && match[1]) {
      setVideoId(match[1]);
      matchText = match[1];
    }

    if (matchText !== "") {
      window.my_modal_1.close();
      bodyFormData.append('id', matchText)
      let res = await fetchPost('transcripe', bodyFormData)
      if (res?.flag) {
        setCaptions(res?.transcription_data)
       } else {
        window.my_modal_1.showModal();
        setCaptionFound(false)
       }
      console.log("ress", res)
    } else {
      setShowError(true);
      // window.my_modal_1.showModal();
    }
  }

  const addToChats = async (msg) => {
    setAllMsgs([
      ...allMsgs,
      {
        // type: "bot",
        type: 'user',
        msg,
      },
      {
        type: 'bot'
      }
    ]);
    setUserMsg("");
    setLoader(true)

    let body = new FormData()

    body.append('context', captions);
    body.append('human_question', msg)

    let botMsg = await fetchPost('send_chatbot_response', body)

    console.log("body res", botMsg)

    setAllMsgs([
      ...allMsgs,
      {
        // type: "bot",
        type: 'user',
        msg,
      },
      {
        type: 'bot',
        msg: botMsg?.Chatbot
      }
    ]);
    setLoader(false)

  };

  useEffect(() => {
    setAllMsgs([])
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Messages link={videoId} />
          {videoId && (
            <Input
              userMsg={userMsg}
              setUserMsg={setUserMsg}
              addToChats={addToChats}
            />
          )}
          {!videoId && (
            <LetsChat
              onToggle={() => {
                window.my_modal_1.showModal();
              }}
            />
          )}
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Enter Youtube Video Link</h3>
          <form className="w-full mt-3">
            {showError && (
              captionFound ? <p className="text-primary">Kindly Enter a Valid URL</p> : <p className="text-primary">Sorry! we could'nt find captions in this video. try again with other video.</p>
            )}
            <div class="relative">
              <input
                value={link}
                onChange={(e) => {
                  console.log(e);
                  setLink(e.target.value);
                }}
                type="search"
                id="search"
                class="block w-full p-4  text-sm rounded-lg bg-accent focus:border-primary"
                placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                required
              />
            </div>
          </form>
          <div className="modal-action">
            <button
              onClick={(e) => {
                e.preventDefault();
                getYouTubeVideoId(link);
              }}
              className="btn bg-primary"
            >
              Submit
            </button>
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Dashboard;
