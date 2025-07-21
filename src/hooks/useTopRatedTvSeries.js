import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTvSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedTvSeries = () => {
    const dispatch = useDispatch();

    const getTopRatedTvSeries = async () => {
        const data = await fetch(
        'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
        API_OPTIONS
        );
        const json = await data.json();
        
        dispatch(addTopRatedTvSeries(json.results))
    };

    useEffect(() => {getTopRatedTvSeries()}), [];
}

export default useTopRatedTvSeries;