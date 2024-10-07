import React from 'react'
import MovieList from '../components/MovieList'

const Movies = ({movies}) => {

  return (
    <div>
        <MovieList movies={movies} />
    </div>
  )
}

export default Movies