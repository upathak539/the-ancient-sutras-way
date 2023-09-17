import React from 'react'

const VideoCard = () => {
  return (
    <div>
        {/* <iframe class="w-full aspect-video hover:aspect-square" src="https://www.youtube.com/embed/oUnttAFyXX4?si=Nksib7BodLM9I13p"></iframe> */}
        <iframe  src="https://www.youtube.com/embed/oUnttAFyXX4?si=Nksib7BodLM9I13p" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoCard