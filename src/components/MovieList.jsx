import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if(!movies) return;
  
  return (
    <div className="movies-list">
      <h2 className="genre-title">{title}</h2>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        speed={500}
        modules={[Navigation]}
        breakpoints={{
          360: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 10,
          },
          1199: {
            slidesPerView: 10.5,
            spaceBetween: 10,
          }
        }}
        className="mySwiper"
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieList;
