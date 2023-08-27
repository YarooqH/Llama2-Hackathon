import React from "react";
import { TypeAnimation } from 'react-type-animation';

function BotMsg(props) {
  return (
    <div className="w-full py-4 flex justify-center bg-base-100 border-t-2 border-b-2 border-base-100 flex-wrap">
      {/* <div className="flex items-center justify-start"> */}
      {/* {isSignedIn ? <img src={user?.imageUrl} alt="pfp" className="h-6 mr-3 rounded-sm " /> : <div className="avatar placeholder">
          <BiSolidUserCircle className="text-white rounded-sm mr-3 text-3xl"/>
      </div>} */}
      <h2 className="w-9/12 lg:w-5/12 text-white text-start flex flex-wrap break-words">
        <TypeAnimation
          sequence={[props?.msg?.msg]}
          cursor={false}
        />
      </h2>
      {/* </div> */}
    </div>
    // <div
    //   className="w-full py-4 flex items-center justify-center bg-base-100"
    // >
      
    // </div>
  );
}

export default BotMsg;
