import React from "react";
import { TypeAnimation } from 'react-type-animation';

function BotMsg(props) {
  return (
    <div
      className="w-full py-4 flex items-center justify-center bg-base-100"
    >
      <h2 className="w-9/12  lg:w-5/12 text-white">
        <TypeAnimation
          sequence={[props?.msg?.msg]}
          cursor={false}
        />
      </h2>
    </div>
  );
}

export default BotMsg;
