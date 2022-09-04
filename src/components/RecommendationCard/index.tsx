import React from 'react'

function RecommendationCard() {
  return (
    <div className='flex w-[200px] xl:w-full flex-col xl:flex-row flex-shrink-0 gap-2'>
      <img
        className='h-24'
        alt="thumbnail"
        src="https://img.freepik.com/premium-psd/new-modern-glow-effect-video-game-review-youtube-channel-thumbnail-web-banner-premium-psd-templa_623685-108.jpg?w=2000"
      />
      <div className='flex flex-col gap-1'>
        <p className='text-sm'>Lifan KPM 200 | Owner Review | PakWheels</p>
        <p className='text-neutral-500 text-[12px]'>PakWheels Bikes</p>
        <p className='text-neutral-500 text-[12px]'>70K views * 3 months ago</p>
      </div>
    </div>
  )
}

export default RecommendationCard