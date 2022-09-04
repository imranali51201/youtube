import React from 'react'

function MediaPlayer() {
  return (
    <div className='h-full relative group bg-neutral-600'>

      <div
        className={`
            opacity-0 group-hover:opacity-100 duration-200
            absolute w-full p-3 bg-neutral-900/70 text-white
        `}
      >
        <h1 className='text-xl'>Aien Apko Scooty Chalana Seekhayen! | PakWheels</h1>
        <p className='text-neutral-300 text-sm'>50,516 viewsSep 3, * 2022</p>
      </div>

      <video className='h-full' controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>

    </div>
  )
}

export default MediaPlayer