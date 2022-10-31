import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUS = {
    IDEL:"idel",
    LOADING:"loading",
    ERROR:"error"
}

const initialState = {
    isPlaying:false,
    videoLink:"",
    videos:"",
    status:STATUS.LOADING
}

const videoSlice = createSlice({
    name:"video",
    initialState,
    reducers:{
        playVideo(state,action){
            state.videoLink = action.payload;
            state.status = STATUS.IDEL;
        },
        pauseVideo(state,action){

        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(playlistRequest.fulfilled,(state,action)=>{
            state.videos = action.payload;
            state.status = STATUS.IDEL;
        })
        .addCase(playlistRequest.rejected,(state,action)=>{
            state.status = STATUS.ERROR;
        })
        .addCase(playlistRequest.pending,(state)=>{
            state.status = STATUS.LOADING;
        })
    }
})

export const {playVideo,pauseVideo} = videoSlice.actions;
export default videoSlice.reducer;
export const playlistRequest = createAsyncThunk('fetch/playlist',async ()=>{
    const res = await fetch("https://playlist-api-xi.vercel.app/playlists");
    const data = await res.json();
    return data;
})