import React from "react";

function UserMsg(props) {
  return (
    <div className="w-full py-4 flex items-center justify-center bg-primary border-t-2 border-b-2 border-base-100">
      <h2 className="w-9/12 lg:w-5/12 m-auto text-black text-start">
        {props?.msg?.msg}
      </h2>
    </div>
  );
}

export default UserMsg;
