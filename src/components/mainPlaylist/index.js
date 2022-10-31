import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux"
import { Link,Outlet } from "react-router-dom";
import { playlistRequest } from "../../store/videoSlice";
const MainPlaylist = () => {
  const dispatch = useDispatch();
  const playlistData = useSelector(state=>state.video);
  let playListLength = (playlistData.status!== 'loading')?playlistData.videos.length:0;
  useEffect(()=>{
    dispatch(playlistRequest());
  },[]);
  return (
    <>
      <section>
        <div className="container">
          <div className="flex">
            <div className="partition">
            <div className="heading">
              <h1>All Playlist</h1>
            </div>
            <div className="create-playlist">
            {
                (playListLength === 0)?<><p className="loading">Loading</p></>:
                <>
                  <Link to="list">
                    <div className="playlistimage">
                      <p className="count-video"><span>{playListLength}</span></p>
                      <img src={playlistData.videos[0].poster} alt="" />
                      <p>Latest movie trailor</p>
                    </div>
                  </Link>
                </>
              }
            </div>
            </div>
            <Outlet/>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainPlaylist