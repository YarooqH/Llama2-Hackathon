import React from "react";
import { useState } from "react";

export default function Input() {
  const [state, setState] = useState("");
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Input text here..."
        className="input input-bordered w-full max-w-xl absolute bottom-4"
        value={state}
        onChange={(e) => {
          console.log(e);
          setState(e.target.value);
        }}
      />
    </div>
  );
}
