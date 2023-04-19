import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//* Obtener el usuario del localstorage
const user = JSON.parse(localStorage.getItem('user'))

//* Estamos creando un estado inicial
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset:(state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: () => {}
})


export const { reset } = authSlice.actions
export default authSlice.reducer