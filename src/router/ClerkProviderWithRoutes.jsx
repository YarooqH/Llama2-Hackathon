/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import PublicPage from "./PublicPage";
import ProtectedPage from "./ProtectedPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

export default function ClerkProviderWithRoutes(props) {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={props.clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in/*" element={<LogIn />} />
        <Route path="/sign-up/*" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}
