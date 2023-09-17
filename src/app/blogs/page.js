import React from 'react'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  return (
    <>
    <div className='mt-[210px] flex flex-col justify-center items-center ' >
      <h1 className="font-semibold text-xs font-IndieFamily text-white sm:text-sm md:text-base">Explore Thoughts on our Ancient Texts...</h1>
    <section className='grid grid-cols-1 max-w-sm sm:grid-cols-2 sm:gap-4 sm:max-w-xl md:grid-cols-3 md:max-w-3xl lg:grid-cols-4 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-6xl'>
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    </section>
    
    </div>
    </>
    
  )
}

export default Blogs