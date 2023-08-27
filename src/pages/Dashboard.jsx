import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatLayout from "../components/ChatLayout";
import Navbar from "../components/Navbar";
import "../App.css";
import Messages from "../components/Messages";
import Input from "../components/Input";

function Dashboard() {
  const [link, setLink] = useState('')
  const [videoId, setVideoId] = useState('')
  const [showError, setShowError] = useState(false)

  function getYouTubeVideoId(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    let matchText = ''
    
    if (match && match[1]) {
      setVideoId(match[1])
      matchText = match[1]
    }
    
    if(matchText !== ''){
      window.my_modal_1.close()
    } else {
      console.log("eerer")
      setShowError(true)
      window.my_modal_1.showModal() 
    }
  }

  useEffect(() => {
    window.my_modal_1.showModal()
  }, [])

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Messages link={videoId} />
          <Input />
        </div>
      </div>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Enter Youtube Video Link</h3>
            <form className="w-full mt-3">
              {showError && <p className="text-primary">Kindly Enter a Valid URL</p>}
              <div class="relative">
                <input
                  value={link}
                  onChange={(e) => {
                    console.log(e);
                    setLink(e.target.value);
                  }}
                  type="search" id="search" class="block w-full p-4  text-sm rounded-lg bg-accent focus:border-primary" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ" required />
              </div>
            </form>
            <div className="modal-action">
              <button onClick={(e) => {
                e.preventDefault()
                getYouTubeVideoId(link)
              }} className="btn bg-primary">Submit</button>
            </div>
          </form>
        </dialog>
    </>
  );
}

export default Dashboard;
