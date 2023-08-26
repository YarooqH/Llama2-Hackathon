import React from "react";
import Sidebar from "../components/Sidebar";
import ChatLayout from "../components/ChatLayout";
import Navbar from "../components/Navbar";
import "../App.css";
import Messages from "../components/Messages";
import Input from "../components/Input";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Messages />
          <Input></Input>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
