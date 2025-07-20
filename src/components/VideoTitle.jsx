import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='main-movie-box'>
        <h1 className='movie-title'>{title}</h1>
        <p className='movie-overview'>{overview}</p>
        <div className='flx-10'>
            <button className='main-btn'><FaPlay /> Play</button>
            <button className='sec-btn'><FiInfo /> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
