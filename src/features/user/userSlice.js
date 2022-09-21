import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    userDetails: {},
    loading: false,
    error: false,
}

export const viewUserHandler = createAsyncThunk(
    'user/viewUserHandler',
    async({ token }, { rejectWithValue, getState }) => {
        if (token !== null && token !== undefined) {
            try {
                const response = await axios.get(
                    'https://taxeasy1.herokuapp.com/users/view/', { headers: { Authorization: token } }
                )
                return response.data.data
            } catch (err) {
                return rejectWithValue('Some error occured')
            }
        } else {
            return rejectWithValue('user is not logged in')
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,

    extraReducers: {
        [viewUserHandler.pending]: state => {
            state.loading = true
            state.error = false
        },
        [viewUserHandler.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.userDetails = payload
        },
        [viewUserHandler.rejected]: state => {
            state.error = true
            state.loading = false
        },
    },
})

export default userSlice.reducer