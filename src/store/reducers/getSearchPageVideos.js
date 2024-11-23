import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY || "AIzaSyD1q23X3tkUnyvuOocsxiVzGh8p_S4f7So";

export const getSearchPageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async (isNext, { getState }) => {
        const {
            youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` : ""
            }`);
        const items = response.data.items;
        const parsedData = await parseData(items);

        return { parsedData: [...videos, ...parsedData], nextPageToken: nextPageTokenFromState }
    }
)



