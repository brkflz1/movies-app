import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import postCreateUser from '../../../services/postCreateUser'

const initialState = {
  auth: false,
  createUserLoading: false,
  createUserError: false,
  createUserErrorResponse: null,
  createUserData: null

}

export const requestCreateUser = createAsyncThunk(
  "auth/requestCreateUser",
  async (queryParams) => {
    const response = await postCreateUser(queryParams)
    return response
  }
)

export const authSlice = createSlice({
  name: 'auth',
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
      .addCase(requestCreateUser.pending, (state) => {
        state.createUserLoading = true
      })
      .addCase(requestCreateUser.fulfilled, (state, action) => {
        state.createUserLoading = false
        state.createUserError = false
        state.createUserData = action.payload

      })
      .addCase(requestCreateUser.rejected, (state, action) => {
        state.createUserLoading = false
        state.createUserData = null
        state.createUserError = true
        state.createUserErrorResponse = action.error.message
      })
  },
})

// Action creators are generated for each case reducer function
export const { } = authSlice.actions

export default authSlice.reducer