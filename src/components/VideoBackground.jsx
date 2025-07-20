import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

    const trailerId = useSelector(state => state.movies?.trailerVideo)

    // get movie trailer from our custom hook
    useMovieTrailer(movieId);

    return (
        <div className='background-trailer'>
            <iframe 
                src={"https://www.youtube.com/embed/"+ trailerId +"?autoplay=1&mute=1&loop=1&controls=0&playlist="+ trailerId}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground
