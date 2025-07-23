import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div className="gpt-page">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
