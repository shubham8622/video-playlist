import { useSearchParams } from "react-router-dom";
import Video from '../../components/videoPlayer';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { playlistRequest } from '../../store/videoSlice';
const Watch = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    let params = searchParams.get('v');
    const data = useSelector(state=>state.video.videos.data);
    let selectedVideo = (data !== undefined)?data.filter((currVideo)=>{
        if(currVideo.name.split(" ").join("") === params)  return currVideo;
    }):"";
    let trailer = ((data !== undefined) && (selectedVideo.length !== 0))?selectedVideo[0].trailer:"not-valid";
    useEffect(()=>{
        if(data === undefined) dispatch(playlistRequest());
    })
    return (
    <>
        {/* <Header/> */}
        <Video trailer= {trailer}/>
    </>
  )
}

export default Watch