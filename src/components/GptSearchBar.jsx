import lang from "../hooks/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import OpenAI from "openai";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, setLoading } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.config.lang);

  // Please install OpenAI SDK first: `npm install openai`
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: import.meta.env.VITE_DEEPSEEK_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const searchText = useRef(null);

  //console.log(import.meta.env); // check if your key shows up

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    return json.results;
  };

  const handleClick = async () => {
    dispatch(setLoading(true)); // start loading
    const searchValue = searchText.current.value;
    const query =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchValue +
      ". only give me names of 5 movies, comma seperated nothing else like the example result given ahead. Example Result: Sholay, Don, Welcome, Dhamaal, Golmaal";

    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "deepseek/deepseek-r1:free",
      });

      const movieNames = completion.choices[0].message.content.split(",");
      const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResult({ movieNames, movieResults: tmdbResults }));
    } catch (err) {
      alert("Error (Please use a faster net or do not use JIO's net beacause Jio has blocked TMDB APIs so the data will not be shown.)")
      console.error("Error fetching movie data:", err);
      dispatch(setLoading(false)); // in case of error
    }

    searchText.current.value = "";
  };

  return (
    <div className="search-bar">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          name="search-field"
          type="text"
          placeholder={lang[language].placeholder}
          ref={searchText}
          autoComplete="off"
        />
        <button className="gpt-btn" type="submit" onClick={handleClick}>
          {lang[language].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar