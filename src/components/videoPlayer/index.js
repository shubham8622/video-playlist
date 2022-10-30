import NotFound from '../404'
const Video = ({trailer}) => {
  return (
    <>
        {
          (trailer !== "" && trailer !== "not-valid")?
          <>
            <iframe className = "playlistVideoPlayer" name="report" height="100%" width="100%" style={{position: "absolute", top: 0, right: 0, bottom: 0,left: 0}}
              src={trailer}>
            </iframe>
          </>
          :
          <><NotFound message="Link is not valid"/></>
        }
    </>
  )
}

export default Video