import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies.nowPlayingMovies);
  if(!movies) return;
  
  return (
    <div className="secondary-container">
      <div className="movies-collection">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={movies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
