import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";
import {BiSolidUserCircle} from 'react-icons/bi'

function UserMsg(props) {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div className="w-full py-4 flex items-center justify-center bg-primary border-t-2 border-b-2 border-base-100 flex-wrap">
      {/* <div className="flex items-center justify-start"> */}
      {isSignedIn ? <img src={user?.imageUrl} alt="pfp" className="h-6 mr-3 rounded-sm " /> : <div className="avatar placeholder">
          <BiSolidUserCircle className="text-white rounded-sm mr-3 text-3xl"/>
      </div>}
      <h2 className="w-9/12 lg:w-5/12 text-white text-start flex flex-wrap break-words">
        {props?.msg?.msg}
      </h2>

      {/* </div> */}
    </div>
  );
}


export default UserMsg;
