import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {

  return (
    <div className='w-80 h-64 flex gap-3 flex-col'>
      <div className='relative'>
        <span className='absolute bottom-3 right-4 text-sm bg-gray-900 px-2 py-0.5 z-10'>
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img src={data.videoThumbnail} alt="Video Thumbnail" className='h-44 w-76 ' />
        </Link>
      </div>
      <div className='flex gap-2'>
        <div className='min-w-fit'>
          <a href="#"><img src={data.channelInfo.image} alt="Channel Image" className='h-9 w-9 rounded-full' /></a>
        </div>
        <div>
          <h3><a href="#" className='line-clamp-2'>{data.videoTitle}</a></h3>
          <div className='text-sm text-gray-500'>
            <div>
              <a href="#" className='hover:text-white'>{data.channelInfo.name}</a>
            </div>
            <div className='flex flex-row gap-0'>
              <span className="after:content-['•'] after:mx-3">
                {data.videoViews} views
              </span>
              <span>
                {data.videoAge} ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card
