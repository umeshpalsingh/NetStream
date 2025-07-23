import lang from "../hooks/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector(state => state.config.lang)
  return (
    <div className="search-bar">
        <form>
           <input id="search" name="search-field" type="text" placeholder={lang[language].placeholder} />
           <button className="gpt-btn" type="submit">{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar