import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import InteractiveBgAnimation from "./InteractiveBgAnimation"

const GptSearch = () => {
  return (
    <div className="gpt-page">
      <div className="main-gpt-part">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
      <InteractiveBgAnimation />
    </div>
  )
}

export default GptSearch
