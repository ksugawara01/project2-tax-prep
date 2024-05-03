import { createSlice } from '@reduxjs/toolkit'

const personalInformationSlice = createSlice({
    name: 'personalInformation',
    initialState: {
        personalInformationId: null,
        firstName: '',
        lastName: '',
        streetAddress: '',
        city: '',
        stateName: '',
        zip: '',
        birthDate: '',
        ssn: '',
        userId: null
    },
    reducers: {
        updatePersonalInformation(state, action) {
            const personalInformation = action.payload;

            // update the state to equal the personal information from the payload
            state.personalInformationId = personalInformation.personalInformationId;
            state.firstName = personalInformation.firstName;
            state.lastName = personalInformation.lastName;
            state.streetAddress = personalInformation.streetAddress;
            state.city = personalInformation.city;
            state.stateName = personalInformation.stateName;
            state.zip = personalInformation.zip;
            state.birthDate = personalInformation.birthDate;
            state.ssn = personalInformation.ssn;
            state.userId = personalInformation.userId;

        }
    }
})

export const { updatePersonalInformation } = personalInformationSlice.actions;
export default personalInformationSlice.reducer;