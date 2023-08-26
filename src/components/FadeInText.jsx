import React from 'react';

const FadeText = () => {
    return (
        <div className="p-2 px-5 flex items-center w-full bg-accent rounded-lg cursor-pointer hover:bg-primary hover:text-white">
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-inherit"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <p className='fade-ending ml-3 text-inherit'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    );
};

export default FadeText;
