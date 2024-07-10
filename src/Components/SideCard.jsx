import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {

    return (
        <div className='h-50 flex gap-3 flex-row my-[8px] w-[350px]'>
            <div className='relative'>
                <span className='absolute bottom-2 right-2 text-[10px] bg-gray-900 px-2 py-0.5 z-10'>
                    {data.videoDuration}
                </span>
                <div className='h-[86px] w-[150px] bg-black rounded-xl'>
                    <Link to={`/watch/${data.videoId}`}>
                        <img src={data.videoThumbnail} alt="Video Thumbnail" className='h-[86px] w-[150px] rounded-xl' />
                    </Link>
                </div>
            </div>
            <div className='flex gap-2 text-xs' >
                <div>
                    <h3><a href="#" className='line-clamp-1 font-medium'>{data.videoTitle}</a></h3>
                    <div className='text-sm text-gray-500'>
                        <div>
                            <a href="#" className='hover:text-white text-xs'>{data.channelInfo.name}</a>
                        </div>
                        <div className='flex flex-row gap-0 text-xs'>
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
