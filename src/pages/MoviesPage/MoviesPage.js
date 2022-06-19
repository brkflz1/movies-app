import React, { useEffect } from 'react'
import './style.scss'
import tmdbLogo from '../../assets/images/tmdb-logo.svg'
import { useDispatch } from 'react-redux'
import { getMoviesList } from '../../app/redux/movies/moviesSlice'

export default function ProtectedPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])

  return (
    <div className='movies-container'>
      <header>

      </header>

      <div>

      </div>

      <footer className='movies-footer'>
        <img src={tmdbLogo} alt='tmdb-logo' />
      </footer>
    </div>
  )
}
