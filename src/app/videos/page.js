import React from 'react'
import VideoCard from '../components/VideoCard'

const Videos = () => {
  return (
    <div className='mt-[230px]  flex flex-col justify-center items-center text-center'>
      <h1 className="font-semibold text-xs font-IndieFamily text-white sm:text-sm md:text-base">You Can also watch these videos and follow us on our YouTube Channel.<a href='https://www.youtube.com/@AncientSutras'>Click here to navigate!</a> </h1>
      <section className='grid grid-cols-1 max-w-sm sm:grid-cols-2 sm:gap-4 sm:max-w-xl md:grid-cols-3 md:max-w-3xl lg:grid-cols-4 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-6xl'>

        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

      </section>

    </div>
  )
}

export default Videos