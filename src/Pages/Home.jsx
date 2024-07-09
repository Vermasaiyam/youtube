import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Spinner from '../Components/Spinner'
import Card from '../Components/Card'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import InfiniteScroll from 'react-infinite-scroll-component'

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);

  useEffect(()=>{
    dispatch(getHomePageVideos(false));
    console.log(videos);
  }, [dispatch])

  return (
    <div className='max-h-screen overflow-auto flex flex-col'>
      <div style={{height: "7.5vh"}}>
        <Navbar/>
      </div>
      <div className='flex' style={{height: "92.5vh"}}>
        <Sidebar/>
        {
          videos.length ? (
            <InfiniteScroll dataLength = {videos.length} next={()=> getHomePageVideos(true)} hasMore={videos.length < 500} loader={<Spinner/>} height={750}>
              <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
                {
                  videos.map((item)=>{
                    return <Card data={item} key={item.videoId}/>
                  })
                }
              </div>
            </InfiniteScroll>
          ) : (
            <Spinner/>
          )
        }
      </div>
    </div>
  )
}

export default Home
