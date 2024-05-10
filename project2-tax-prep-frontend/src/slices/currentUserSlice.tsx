import { createSlice } from '@reduxjs/toolkit'

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        userId: 4,
        update: false
    },
    reducers: {
        updateCurrentUser(state, action) {
            // update the state to equal the userId from the payload
            state.userId = action.payload;
            state.update = !state.update;
        }
    }
})

export const { updateCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;