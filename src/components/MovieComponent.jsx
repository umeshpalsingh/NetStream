import { IMG_POSTER_CDN } from "../utils/constants";

const MovieComponent = ({movieArr}) => {
    console.log(movieArr);
    const {poster_path, title} = movieArr;
    if(!poster_path) return null;
  return (
    <div className="fast-movie">
        <img src={IMG_POSTER_CDN + poster_path} alt={title} />
    </div>
  )
}

export default MovieComponent;
