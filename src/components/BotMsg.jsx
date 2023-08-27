import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import loaderAnimation from '../assets/Loader.json'

function BotMsg(props) {
  return (
    <div className="w-full py-4 flex justify-center bg-base-100 border-t-2 border-b-2 border-base-100 flex-wrap">
      <h2 className="w-9/12 lg:w-5/12 text-white text-start flex flex-wrap break-words">
        {props?.msg?.msg ? <TypeAnimation
          sequence={[props?.msg?.msg]}
          cursor={false}
          speed={100}
        /> : <Lottie animationData={loaderAnimation} style={{ height: '30px' }} loop={true} />}
      </h2>
    </div>
  );
}

export default BotMsg;
