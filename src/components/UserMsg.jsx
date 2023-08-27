import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";

function UserMsg(props) {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div className="w-full py-4 flex  justify-center bg-primary border-t-2 border-b-2 border-base-100 flex-wrap	relative">
      {console.log("user", user)}
      {/* <div className="flex items-center justify-start"> */}
      {!isSignedIn ? <img src={user?.imageUrl} alt="pfp" className="h-6 mr-3 rounded-sm" /> : <div className="avatar placeholder">
        <div className="bg-base-100 text-neutral-content rounded-sm h-6 mr-3">
          <span className="text-sm text-white">{user?.firstName?.at(0)}</span>
        </div>
      </div>}
      <h2 className="w-9/12 lg:w-5/12 text-black text-start flex flex-wrap break-words">
        {props?.msg?.msg}
      </h2>

      {/* </div> */}
    </div>
  );
}


export default UserMsg;
