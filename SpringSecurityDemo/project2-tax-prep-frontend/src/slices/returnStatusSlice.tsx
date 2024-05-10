import { createSlice } from '@reduxjs/toolkit'

const returnStatusSlice = createSlice({
    name: 'returnStatus',
    initialState: {
        returnStatusId: null,
        isSubmitted: null,
        userId: null
    },
    reducers: {
        updateReturnStatus(state, action) {
            const returnStatus = action.payload;
            
            // update the state to equal the return status from the payload
            state.returnStatusId = returnStatus.returnStatusId;
            state.isSubmitted = returnStatus.isSubmitted;
            state.userId = returnStatus.userId;

        }
    }
})

export const { updateReturnStatus } = returnStatusSlice.actions;
export default returnStatusSlice.reducer;