import { useSelector } from "react-redux"
import GptResult from "./GptResult";
import SearchShimmer from "./SearchShimmer";

const GptMovieSuggestions = () => {
  const {movieNames, movieResults, loading} = useSelector(state => state.gpt);
  // console.log(movieResults);
  if (loading) return <SearchShimmer />; // show shimmer while loading
  if(!movieNames) return null;

  console.log(movieNames.length);

  return (
    <div className="movie-result-box">
      {movieNames.map((movie, index) => {
        return <GptResult key={index} movies={movieResults[index]} />
      })}
    </div>
  )
}

export default GptMovieSuggestions
