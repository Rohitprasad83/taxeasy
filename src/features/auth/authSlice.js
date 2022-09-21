import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

const initialState = {
    token: Cookies.get('token') !== undefined ? Cookies.get('token') : null,
    verifyEmail: Cookies.get('verifyEmail') !== undefined ?
        Cookies.get('verifyEmail') :
        null,
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
                    url: 'https://taxeasy1.herokuapp.com/users/login/',
                    data: {
                        username,
                        password,
                    },
                })
                return response.data.jwt
            } catch (err) {
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)

export const signUpHandler = createAsyncThunk(
    'auth/loginHandler',
    async({ e, credentials }, { rejectWithValue }) => {
        e.preventDefault()

        const { name, email, pan, phone, password, confirmPassword } = credentials
        if (name && email && pan && phone && password && confirmPassword) {
            try {
                const response = await axios({
                    method: 'post',
                    url: 'https://taxeasy1.herokuapp.com/users/create/',
                    data: {
                        name,
                        email,
                        pan_number: pan,
                        'Phone number': phone,
                        password,
                        confirm_password: confirmPassword,
                    },
                })
                return response.data.jwt
            } catch (err) {
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.token = null
            Cookies.remove('token')
        },
        setError: state => {
            state.error = false
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
            state.error = payload
            state.loading = false
        },
        [signUpHandler.pending]: state => {
            state.loading = true
            state.error = false
        },
        [signUpHandler.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.token = payload
            Cookies.set('token', payload)
        },
        [signUpHandler.rejected]: (state, { payload }) => {
            state.error = payload
            state.loading = false
        },
    },
})

export const { logout, setError } = authSlice.actions

export default authSlice.reducer