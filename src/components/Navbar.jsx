import React from 'react'
import { UserButton } from '@clerk/clerk-react'

function Navbar() {
    return (
        <div className='w-full flex items-center '>
            {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            <div className="navbar bg-base-100 text-primary-content">
                <a className="btn btn-ghost normal-case text-xl text-center w-full text-white">YouTubeGPT</a>
            </div>
            <div className="mr-3" >
                <UserButton />
            </div>
        </div>
    )
}

export default Navbar