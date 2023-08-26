/* eslint-disable no-unused-vars */
import React from "react";

import { UserButton } from "@clerk/clerk-react";

export default function ProtectedPage() {
  return (
    <>
      <h1>Protected page</h1>S
      <UserButton />
    </>
  );
}
