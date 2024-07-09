import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Spinner from '../Components/Spinner'
import Card from '../Components/Card'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'
import { clearVideos } from '../features/youtube/youtubeSlice'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos'
import Searchcard from '../Components/Searchcard'

const Search = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    useEffect(() => {
        dispatch(clearVideos());
        if (searchTerm === "") {
            navigate('/');
        }
        else {
            dispatch(getSearchPageVideos(false));
        }
    }, [dispatch, navigate, searchTerm])

    return (
        <div className='max-h-screen overflow-auto'>
            <div style={{ height: "7.5vh", position: "sticky" }}>
                <Navbar />
            </div>
            <div className='flex' style={{ height: "92.5vh" }}>
                <Sidebar />
                {
                    videos.length ? (
                        <div className='py-8 pl-8 flex flex-col gap-5 w-full '>
                            <InfiniteScroll dataLength={videos.length} next={() => getSearchPageVideos(true)} hasMore={videos.length < 500} loader={<Spinner />} height={750}>

                                {
                                    videos.map((item) => {
                                        return (
                                            <div className='my-5'>
                                                <Searchcard data={item} key={item.videoId} />
                                            </div>
                                        )
                                    })
                                }
                            </InfiniteScroll>
                        </div>
                    ) : (
                        <Spinner />
                    )
                }
            </div>
        </div>
    )
}

export default Search
