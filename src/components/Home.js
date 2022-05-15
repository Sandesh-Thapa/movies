import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../redux/action'

const Home = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

  return (
    <>
      {movies.error ? <h2>{movies.error}</h2> : movies.loading ? <h2>Loading...</h2> :
        movies.movies.length !== 0 && 
        movies.movies.results.map(movie => {
          return (
            <img
              key={movie.title}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          )
        })
      }
    </>
  )
}

export default Home