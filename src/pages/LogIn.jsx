import React from "react";
import { SignIn } from "@clerk/clerk-react";

const LogIn = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignIn
        routing="path"
        path="/sign-in"
        redirectUrl="/dashboard"
        signInUrl="/sign-up"
      />
    </div>
  );
};

export default LogIn;
