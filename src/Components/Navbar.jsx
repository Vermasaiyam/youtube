import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
// import { FaYoutube } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { clearVideos, changeSearchTerm } from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';


// Navbar 

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    const handleSearch = ()=>{
        if (location.pathname !== '/search' ){
            navigate('/search');
        }
        else{
            dispatch(clearVideos);
            dispatch(getSearchPageVideos(false));
        }
    }

    return (
        <div className='flex justify-between px-4 h-14 items-center bg-[#212121] opacity-95 text-white sticky' >
            <div className='flex gap-2 items-center text-2xl '>
                <div className='p-8'>
                    <GiHamburgerMenu className='cursor-pointer' />
                </div>
                <div className='flex items-center gap-2 justify-center cursor-pointer'>
                    <div className=' flex items-center justify-center h-4 w-7.5 rounded-full bg-white'>
                        <IoLogoYoutube className='text-[33px] text-red-600 cursor-pointer' />
                    </div>
                    <span className='text-xl font-medium'>YouTube</span>
                </div>
            </div>

            <div className='flex items-center justify-center gap-2 mr-9'>
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    handleSearch();
                }}>
                    <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl '>
                        <div className='flex gap-5 items-center pr-5'>
                            <input type="text" placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none px-4' value={searchTerm} onChange={e=> dispatch(changeSearchTerm(e.target.value))}/>
                        </div>
                        <button className='h-10 w-12 flex items-center justify-center bg-zinc-800 rounded-r-3xl' >
                            <IoMdSearch className='flex items-center text-2xl cursor-pointer' />
                        </button>

                    </div>
                </form>
                <div  className='bg-zinc-900 rounded-full p-3 hover:bg-zinc-700 cursor-pointer'>
                    <FaMicrophone className='text-md  ' />
                </div>
            </div>

            <div className='flex gap-5 items-center justify-center text-xl'>
                <div className='cursor-pointer '>
                    <RiVideoAddLine className='text-md' />
                </div>
                <div className='flex items-center justify-center relative '>
                    <IoMdNotificationsOutline className='text-2xl cursor-pointer'/>
                    <span className='absolute bottom-3 left-2 text-xs bg-red-600 px-1 rounded-full'>9+</span>
                </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ntUU7AzmOxa5HB8zS83sa-JFHEfZJAoI2A&s" alt="Profile Picture"  className='rounded-full h-9 w-9 cursor-pointer' />
                
            </div>
        </div>
    )
}

export default Navbar
