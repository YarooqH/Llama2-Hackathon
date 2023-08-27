import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@clerk/clerk-react";

const Landing = () => {
  const navigate = useNavigate();
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  // In case the user signs out while on the page.
  if (userId && sessionId) {
    navigate("/dashboard");
  }

  return (
    <div className="flex w-screen h-screen bg-slate-300">
      <div className="w-8/12 bg-base-100"></div>
      <div className="flex flex-col justify-center w-1/3 bg-secondary">
        <div className="h-full bg-primary flex flex-col space-y-5 items-center justify-center">
          <h1 className="font-bold text-3xl">Get Started</h1>
          <div className="space-x-2 w-full flex justify-center">
            <button
              className="btn btn-outline btn-secondary"
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Log in
            </button>
            <button
              className="btn btn-outline btn-secondary"
              onClick={() => {
                navigate("/sign-up");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center m-5">
            <div className="flex justify-center text-black md:mb-3 text-xl">
              Youtube-GPT 🦙
            </div>
            <div className="text-xs space-x-2 flex justify-center">
              <a
                href="#"
                target="_blank"
                className="text-gray-500"
                rel="noreferrer"
              >
                Terms of use
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                target="_blank"
                className="text-gray-500 "
                rel="noreferrer"
              >
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
