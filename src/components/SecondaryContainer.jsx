import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies);
  if(!movies) return;
  console.log(movies);
  
  return (
    <div className="secondary-container">
      <div className="movies-collection"> 
        <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList title={"Popular TV Series"} movies={movies?.popularTvSeries} />
        <MovieList title={"Airing Today TV Series"} movies={movies?.airingTodayTvSeries} />
        <MovieList title={"Top Rated TV Series"} movies={movies?.topRatedTvSeries} />
      </div>
    </div>
  )
}

export default SecondaryContainer
