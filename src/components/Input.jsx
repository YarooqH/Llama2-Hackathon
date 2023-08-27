import React from "react";
import { useState } from "react";
import {BiSend} from 'react-icons/bi'

export default function Input(props) {
  // const [state, setState] = useState("");
  return (
    <div className="flex justify-center">
      {/* <input
        type="text"
        placeholder="Input text here..."
        className="input input-bordered w-full max-w-xl "
        value={state}
        onChange={(e) => {
          console.log(e);
          setState(e.target.value);
        }}
      /> */}
      <form onSubmit={(e) => {
        e.preventDefault()
        props?.addToChats(props?.userMsg)
        }} className="fixed bottom-4 w-2/5">
        <div class="relative">
          <input
          value={props?.userMsg}
          onChange={(e) => {
            props?.setUserMsg(e.target.value);
          }}
           type="search" id="search" class="block w-full p-4  text-sm rounded-lg bg-accent focus:border-primary" placeholder="Send a Message..." required/>
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-base-100 font-medium rounded-lg text-sm px-4 py-2 "><BiSend /></button>
        </div>
      </form>
    </div>
  );
}
