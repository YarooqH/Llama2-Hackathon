import React from "react";

const LetsChat = (props) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="space-y-3">
        <button
          className="btn btn-outline w-max btn-secondary text-white"
          onClick={props.onToggle}
        >
          Lets start a new chat
        </button>
      </div>
    </div>
  );
};

export default LetsChat;
