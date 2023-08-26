import React, { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import FadeInText from './FadeInText';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`w-64 bg-gray-800 h-screen transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-64'
                    }`}
            >
                <div className='mt-20'>
                    <FadeInText text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque, obcaecati voluptatibus quaerat vero quae illum molestiae. Debitis, dolorum vel?'} />
                    {/* <div className='p-5 h-24'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque, obcaecati voluptatibus quaerat vero quae illum molestiae. Debitis, dolorum vel?
                        </p>
                    </div> */}
                    {/* <h2>HSOSO</h2>
                    <h2>HSOSO</h2>
                    <h2>HSOSO</h2>
                    <h2>HSOSO</h2>
                    <h2>HSOSO</h2> */}
                </div>
            </div>

            {/* Main content */}
            <div className={`ml-64 transition-all duration-300 ${isOpen ? 'ml-0' : 'ml-64'}`} >
                {/* Button to toggle the sidebar */}
                <div className='flex fixed top-5 left-5 z-10 items-center justify-around cursor-pointer'>
                    <button
                        onClick={toggleSidebar}
                        className="p-3 bg-gray-800 text-white rounded-md"
                    >
                        <svg stroke="currentColor" fill="none" strokeWwidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLineJoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                    </button>
                    {isOpen && <div className='p-3 ml-5 flex items-center justify-between w-[140px] rounded-md bg-primary'>
                        <AiOutlinePlus />
                        <h1 className='text-sm'>
                            New Chat
                        </h1>
                    </div>}
                </div>

                {/* Main content goes here */}
            </div>
        </div>
    );
};

export default Sidebar;
