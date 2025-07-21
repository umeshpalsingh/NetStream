import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useAiringTodayTvSeries from "../hooks/useAiringTodayTvSeries";
import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularTvSeries();
  useAiringTodayTvSeries();
  useTopRatedTvSeries();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
