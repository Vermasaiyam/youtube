import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { getRecommendedVideo } from "../store/reducers/getRecommendedVideo";
import Navbar from "../Components/Navbar";
import { IoIosMore } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";


export default function Watch() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const currentPlaying = useAppSelector(
        (state) => state.youtubeApp.currentPlaying
    );

    console.log(currentPlaying);

    const recommendedVideo = useAppSelector(
        (state) => state.youtubeApp.recommendedVideo
    );

    useEffect(() => {
        if (id) {
            dispatch(getVideoDetails(id));
        } else {
            navigate("/");
        }
    }, [id, navigate, dispatch]);

    useEffect(() => {
        if (currentPlaying && id) dispatch(getRecommendedVideo(id));
    }, [currentPlaying, dispatch, id]);

    return (
        <>
            {currentPlaying && currentPlaying?.videoId === id && (
                <div className="max-h-screen overflow-hidden">
                    <div >
                        <Navbar />
                    </div>

                    <div className="my-10 mx-20 overflow-y-auto">
                        <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                            frameBorder="0"
                            width="980"
                            height="570"
                            allowFullScreen
                            title="Youtube Player"
                            className="rounded-xl">
                        </iframe>
                        <div className="w-[960px] mx-1">
                            <div className="my-3 text-lg font-medium">
                                {currentPlaying.videoTitle}
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <div className=" flex flex-row">
                                    <div className="h-10 w-10 cursor-pointer">
                                        <img src={currentPlaying.channelInfo.image} alt="Channel Image" className=" rounded-full " />
                                    </div>
                                    <div className="flex flex-col mx-2.5">
                                        <span className="text-sm font-medium">{currentPlaying.channelInfo.name}</span>
                                        <span className="text-xs text-gray-400">{currentPlaying.channelInfo.subscribers} subscribers</span>
                                    </div>
                                    <div>
                                        <button className="py-2 px-4 rounded-3xl text-xs mx-5 bg-red-600">Subscribe</button>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center gap-3">
                                    <div className="h-8 w-28 bg-[#272727] flex flex-row gap-1.5 items-center justify-center rounded-full cursor-pointer ">
                                        <div className="flex flex-row gap-2 hover:bg-zinc-700">
                                            <AiOutlineLike />
                                            <span className="text-xs">{(currentPlaying.videoLikes)}</span>
                                        </div>
                                        <div className="h-6 w-px bg-gray-400"></div>
                                        <div className="hover:bg-zinc-700">
                                            <AiOutlineDislike />
                                        </div>
                                    </div>
                                    <div className="h-8 w-20 bg-[#272727] flex flex-row gap-1.5 items-center justify-center rounded-full cursor-pointer hover:bg-zinc-700 ">
                                        <RiShareForwardLine />
                                        <span className="text-xs">Share</span>
                                    </div>
                                    <div className="h-8 w-24 bg-[#272727] flex flex-row gap-1.5 items-center justify-center rounded-full cursor-pointer hover:bg-zinc-700 ">
                                        <RiDownloadLine />
                                        <span className="text-xs">Download</span>
                                    </div>
                                    <div className="h-8 w-8 bg-[#272727] flex flex-row items-center justify-center rounded-full cursor-pointer hover:bg-zinc-700 ">
                                        <IoIosMore />
                                    </div>
                                </div>
                            </div>
                            <div className="my-3 mx-1 px-3 rounded-xl bg-[#272727] py-2 text-sm">
                                Description
                                Lorem ipsum dolor sit.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, animi? A esse ad, optio illum vitae numquam adipisci veniam nam excepturi dicta aliquam odit earum temporibus, exercitationem quidem, veritatis sapiente. Dolores quam dolore, mollitia sint, repellendus odit facilis qui sit illum blanditiis tenetur, iste inventore.
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
}