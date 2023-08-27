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
      <div className="w-0 lg:w-8/12 bg-base-100"></div>
      <div className="flex flex-col justify-center w-full lg:w-1/3 bg-secondary">
        <div className="h-full bg-primary flex flex-col space-y-5 items-center justify-center">
          <h1 className="font-bold text-3xl text-white">Get Started</h1>
          <div className="w-full flex flex-col items-center space-y-2 md:space-y-0 md:space-x-2 md:flex-row  justify-center">
            <button
              className="btn btn-outline w-36 xl:w-48 btn-secondary text-white"
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Log in
            </button>
            <button
              className="btn btn-outline btn-secondary w-36 xl:w-48 text-white"
              onClick={() => {
                navigate("/sign-up");
              }}
            >
              Sign up
            </button>
          </div>
          <div className=" self-center">
            <a
              className="text-gray-800 hover:font-normal font-light"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              skip for now
              <span className="p-1 text-white">
                <svg
                  // fill="#fcfcfc"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="64px"
                  height="64px"
                  viewBox="0 0 490.939 490.939"
                  xml:space="preserve"
                  className="w-3 inline text-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M41.552,490.939c-2.665,0-5.297-1.064-7.237-3.095c-3.185-3.337-3.675-8.419-1.186-12.303L181.221,244.52L33.149,15.43 c-2.508-3.88-2.031-8.973,1.152-12.32c3.183-3.347,8.245-4.081,12.246-1.768l407.844,235.47c3.094,1.786,5,5.088,5,8.66 s-1.906,6.874-5,8.66L46.548,489.6C44.986,490.5,43.263,490.939,41.552,490.939z M72.451,39.39l129.061,199.679 c2.128,3.293,2.136,7.525,0.02,10.825L72.156,451.721l357.236-206.25L72.451,39.39z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center m-5">
            <div className="flex justify-center text-black md:mb-3 text-xl">
              Xorllama 🦙
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
