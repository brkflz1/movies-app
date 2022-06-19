import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import getMoviesListService from '../../../services/getMoviesListService'

const initialState = {
  moviesListLoading: false,
  moviesListError: false,
  moviesListErrorResponse: null,
  moviesListData: null,

}

export const getMoviesList = createAsyncThunk(
  "movies/getMoviesList",
  async (queryParams) => {
    const response = await getMoviesListService(queryParams)
    return response
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.pending, (state) => {
        state.moviesListLoading = true
      })
      .addCase(getMoviesList.fulfilled, (state, action) => {
        state.moviesListLoading = false
        state.moviesListError = false
        const { data: { results } } = action.payload
        state.moviesListData = results
      })
      .addCase(getMoviesList.rejected, (state, action) => {
        state.moviesListLoading = false
        state.moviesListData = null
        state.moviesListError = true
        state.moviesListErrorResponse = action.error.message
      })
  },
})

// Action creators are generated for each case reducer function
export const { } = moviesSlice.actions

export default moviesSlice.reducer