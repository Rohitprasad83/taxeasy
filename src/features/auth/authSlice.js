import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

const initialState = {
    token: Cookies.get('token'),
    loading: false,
    error: false,
}

export const loginHandler = createAsyncThunk(
    'auth/loginHandler',
    async({ e, username, password }, { rejectWithValue }) => {
        e.preventDefault()
        if (username && password) {
            try {
                const response = await axios({
                    method: 'post',
                    url: 'http://54.208.4.29:8000/user/login/',
                    data: {
                        username,
                        password,
                    },
                })
                return response.data.jwt
            } catch (err) {
                return rejectWithValue(err)
            }
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.token = null
            Cookies.remove('token')
        },
    },
    extraReducers: {
        [loginHandler.pending]: state => {
            state.loading = true
            state.error = false
        },
        [loginHandler.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.token = payload
            Cookies.set('token', payload)
        },
        [loginHandler.rejected]: (state, { payload }) => {
            state.error = true
            state.loading = false
        },
    },
})

export const { logout } = authSlice.actions

export default authSlice.reducer