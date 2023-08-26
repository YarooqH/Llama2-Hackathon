import React from 'react';

const FadeText = () => {
    return (
        <div className="p-2 px-5 flex items-center w-full bg-secondary-focus rounded-lg">
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                // className="h-4 w-4"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <p className='fade-ending ml-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    );
};

export default FadeText;
