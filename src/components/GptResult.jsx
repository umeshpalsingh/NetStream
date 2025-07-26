import React from 'react'
import MovieComponent from './MovieComponent'

const GptResult = ({movies}) => {
    // console.log(movies);
    
  return (
    <div className="movies-grid">
        {movies.map((movieArr, index) => {
            return <MovieComponent movieArr={movieArr} key={index} />
        })}
    </div>
  )
}

export default GptResult
