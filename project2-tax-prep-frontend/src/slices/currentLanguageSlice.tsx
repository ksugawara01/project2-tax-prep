import { createSlice } from '@reduxjs/toolkit'

const currentLanguageSlice = createSlice({
    name: 'currentLanguage',
    initialState: {
        language: 'jp'
    },
    reducers: {
        updateCurrentLanguage(state, action) {
            const lng = action.payload;
            
            // update the state to equal the language from the payload
            state.language = lng.language;
        }
    }
})

export const { updateCurrentLanguage } = currentLanguageSlice.actions;
export default currentLanguageSlice.reducer;