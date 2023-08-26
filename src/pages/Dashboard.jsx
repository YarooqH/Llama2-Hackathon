import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatLayout from '../components/ChatLayout'
import Navbar from '../components/Navbar'
import '../App.css'
import Messages from '../components/Messages'

function Dashboard() {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='w-full'>
                    <Navbar />
                    <Messages />
                </div>
            </div>
        </>
    )
}

export default Dashboard