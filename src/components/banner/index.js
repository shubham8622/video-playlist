import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux"
import { playlistRequest } from "../../store/videoSlice";
import './banner.css';
import solo from '../../solo.jpg'
import { Link } from "react-router-dom";
const Banner = ({heading}) => {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.video);
  useEffect(()=>{
    dispatch(playlistRequest());
  },[]);
  return (
    <>
    {
      (data.status === "loading")?<><p className="loading">Loading</p></>:
      <>
        <section className="hero-section">
          <div className="container">
            <div className="heading">
              <h1>{(heading)?heading:"Watch latest movies trailor"}</h1>
            </div>
            <div className="owl-carousel owl-theme">
              {
                data.videos?.map((allVideos,index)=>{
                  return(
                  <>
                    <Link to={`/watch?v=${allVideos.name.split(" ").join("")}`}>
                      <div className="poster" key={allVideos._id}>
                        <figure>
                          <img src={(allVideos.name==="Solo: A Star Wars Story")?solo:allVideos.poster} alt="error" />
                        </figure>
                        <p>{allVideos.name}</p>
                      </div>
                    </Link>
                  </>
                  )
                })
              }
            </div>
          </div>
        </section>
      </>
    }
    </>
  )
}

export default Banner