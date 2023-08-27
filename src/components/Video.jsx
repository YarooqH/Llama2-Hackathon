import React from 'react'

function Video({embedId}) {
  return (
    <div className="w-full py-4 flex items-center justify-center bg-accent">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

  

export default Video