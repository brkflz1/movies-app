import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import postCreateUser from '../../../services/postCreateUser'
import getTokenService from '../../../services/getTokenService'
import getAuthenticateService from '../../../services/getAuthenticateService'

const initialState = {
  auth: false,
  createUserLoading: false,
  createUserError: false,
  createUserErrorResponse: null,
  createUserData: null,
  loginUserLoading: false,
  requestToken: null,
  loginUserError: true,
  loginUserErrorResponse: null

}

export const requestCreateUser = createAsyncThunk(
  "auth/requestCreateUser",
  async (queryParams) => {
    const response = await postCreateUser(queryParams)
    return response
  }
)

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (queryParams) => {
    const requestToken = await getTokenService()
    
    if (requestToken.status !== 200) {
      return { error: 'Can not get the token!' }
    }
    return requestToken
  }
)

export const setAuthentication = createAsyncThunk(
  "auth/setAuthentication",
  async (token) => {
    const response = await getAuthenticateService(token)
    return response
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
      .addCase(loginUser.pending, (state) => {
        state.loginUserLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginUserLoading = false
        state.loginUserError = false
        const { data: { request_token } } = action.payload
        state.auth = true
        state.requestToken = request_token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginUserLoading = false
        state.createUserData = null
        state.loginUserError = true
        state.loginUserErrorResponse = action.error.message
      })
      .addCase(setAuthentication.pending, (state) => {
        state.authenticateLoading = true
      })
      .addCase(setAuthentication.fulfilled, (state, action) => {
        state.authenticateLoading = false
        state.authenticateError = false
        debugger
        state.authanticationResponse = action.payload
      })
      .addCase(setAuthentication.rejected, (state, action) => {
        state.authenticateLoading = false
        state.authanticationResponse = null
        state.authenticateError = true
        debugger
        state.authenticaterResponse = action.error.message
      })
  },
})

// Action creators are generated for each case reducer function
export const { } = authSlice.actions

export default authSlice.reducer