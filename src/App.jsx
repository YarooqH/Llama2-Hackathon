/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ClerkProviderWithRoutes from "./router/ClerkProviderWithRoutes";
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes clerkPubKey={clerkPubKey} />
    </BrowserRouter>
  );
}

export default App;
