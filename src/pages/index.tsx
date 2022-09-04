import React from 'react'
import MediaPlayer from '../components/MediaPlayer'
import RecommendationCard from '../components/RecommendationCard'

function Home() {
  return (
    <div className='h-full p-0 sm:px-10 lg:px-24 py-8'>
      <div className='flex flex-col xl:flex-row h-full gap-5'>
        <div className='flex-1'>
          <MediaPlayer />
        </div>
        <div className='flex flex-row xl:flex-col gap-3 flex-shrink-0 xl:w-[400px] overflow-auto'>
          {
            new Array(50).fill(0).map((_, index) => {
              return <RecommendationCard key={index} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home