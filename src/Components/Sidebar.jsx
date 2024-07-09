import React from 'react'
import {
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
} from 'react-icons/md'
import {SiYoutubeshorts} from 'react-icons/si'
import {AiOutlineLike} from 'react-icons/ai'
import {IoMdHome} from 'react-icons/io'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const mainLinks = [
        {
            icon: <IoMdHome className='text-xl cursor-pointer'/>,
            name: 'Home'
        },
        {
            icon:  <SiYoutubeshorts className='text-xl cursor-pointer'/>,
            name: "Shorts"
        },
        {
            icon: <MdSubscriptions className='text-xl cursor-pointer'/>,
            name: "Subscription"
        }
    ];
    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className='text-xl cursor-pointer'/>,
            name: 'Library'
        },
        {
            icon: <MdHistory className='text-xl cursor-pointer'/>,
            name: "History"
        },
        {
            icon: <MdOutlineWatchLater className='text-xl cursor-pointer'/>,
            name: "Watch Later"
        },
        {
            icon: <AiOutlineLike className='text-xl cursor-pointer'/>,
            name: "Liked Videos"
        }
    ];
  return (
    <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-800 mb-2'>
        {
            mainLinks.map(({icon, name})=>{
                return (
                <li key={name} className={`h-15 pl-6 py-3 hover:bg-zinc-700 rounded-xl ${name === 'Home' ? "bg-zinc-500" : " "}`}>
                    <Link to='/' className='flex items-center gap-5'>
                        {icon} 
                        <span className='text-sm cursor-pointer tracking-wider'>{name}</span>
                    </Link>
                </li>
            )
            })
        }
      </ul>
      <ul className='flex flex-col border-b-1 border-gray-800'>
        {
            otherLinks.map(({icon, name})=>{
                return (
                <li key={name} className={`h-15 pl-6 py-3 hover:bg-zinc-700 rounded-xl`}>
                    <a href='#' className='flex items-center gap-5'>
                        {icon} 
                        <span className='text-sm cursor-pointer tracking-wider'>{name}</span>
                    </a>
                </li>
            )
            })
        }
      </ul>
    </div>
  )
}

export default Sidebar
