import {IMG_POSTER_CDN} from "../utils/constants"

const MovieCard = ({movie}) => {
    // console.log(movie);
    const posterPath = movie.poster_path;
    if(!posterPath) return null
  return (
    <div className='movie-card'>
        <img src={IMG_POSTER_CDN + posterPath} alt="" />
    </div>
  )
}

export default MovieCard
