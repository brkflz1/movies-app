import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/auth/authSlice'
import moviesReducer from './redux/movies/moviesSlice'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      movies: moviesReducer
  },
})