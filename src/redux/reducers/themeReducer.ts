import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type ThemeState = {
    theme: 'light' | 'dark'
}

const initialState = {
    theme: 'light'
}

export const slice = createSlice({
    name: 'threme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeState['theme']>) =>{
            state.theme = action.payload

        }

    }
})

export const {setTheme} = slice.actions;
export default slice.reducer;