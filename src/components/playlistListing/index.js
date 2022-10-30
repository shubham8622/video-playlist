import './listing.css';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { playlistRequest } from '../../store/videoSlice';
import solo from '../../solo.jpg';
import { Link } from 'react-router-dom';
const PlaylistListing = () => {
    const dispatch = useDispatch();
    const listing = useSelector(state=>state.video);
    let playlistLength = (listing.status === "loading")?0:listing.videos.data.length;
    useEffect(()=>{
        dispatch(playlistRequest());
    },[]);
  return (
    <>
            <div className="play-list-video">
                <div className="heading">
                    <h1>Listing</h1>
                </div>
                <div className="p-listing">
                {
                    (playlistLength === 0)?<><p className="loading">Loading</p></>:
                    <>
                        {
                            listing.videos.data.map((allDetails,index)=>{
                                return(
                                    <>
                                        <Link to={`/watch?v=${allDetails.name.split(" ").join("")}`}>
                                            <div className="poster" key={index}>
                                                <figure>
                                                <img src={(allDetails.name==="Solo: A Star Wars Story")?solo:allDetails.poster} alt="error" />
                                                </figure>
                                                <div className="content">
                                                    <p>{allDetails.name}</p>
                                                    <p>{allDetails.year}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                )
                            })
                        }
                    </>
                }
                </div>
            </div>
    </>
  )
}

export default PlaylistListing