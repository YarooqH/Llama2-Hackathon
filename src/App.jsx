/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ClerkProviderWithRoutes from "./router/ClerkProviderWithRoutes";
import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

// const clerkPubKey = REACT_APP_CLERK_PUBLISHABLE_KEY;
// console.log(REACT_APP_CLERK_PUBLISHABLE_KEY);
function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes clerkPubKey="pk_test_c291bmQtc2hlZXBkb2ctMzQuY2xlcmsuYWNjb3VudHMuZGV2JA" />
    </BrowserRouter>
  );
}

export default App;
