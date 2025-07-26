import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(state => state.movies.trailerVideo)

    // fetch the trailer video & updating the store
    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const filterTeasers = json.results.filter((video) => video.type === "Teaser");
        // IF Trailer is not present then we will show the Teaser
        const trailer = filterData.length ? filterData[0] : filterTeasers[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer?.key))
    }

    useEffect(() => {
     !trailerVideo && getMovieVideo()
    },[])
}

export default useMovieTrailer
