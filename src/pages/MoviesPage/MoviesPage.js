import React, { useEffect } from 'react'
import './style.scss'
import tmdbLogo from '../../assets/images/tmdb-logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesList } from '../../app/redux/movies/moviesSlice'
import MovieCart from '../MovieCart/MovieCart'

export default function ProtectedPage() {
  const dispatch = useDispatch()
  const moviesListData = useSelector(state => state.movies.moviesListData)

  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])

  return (
    <div className='movies-container'>
      <header>
          <h2>MOVIES DATABASE</h2>
      </header>

      <div className='movies-list'>
        {
          moviesListData && moviesListData.length > 0 && moviesListData.map((movie, index) => {
            return (
              <div key={index} className='movie-container'>
                <MovieCart {...movie} />
              </div>
            )
          })
        }
      </div>

      <footer className='movies-footer'>
        <img src={tmdbLogo} alt='tmdb-logo' />
      </footer>
    </div>
  )
}
