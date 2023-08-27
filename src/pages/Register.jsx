import React from "react";
import { SignUp } from "@clerk/clerk-react";

const LogIn = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignUp
        routing="path"
        path="/sign-up"
        redirectUrl="/dashboard"
        signInUrl="/sign-in"
      />
    </div>
  );
};

export default LogIn;
