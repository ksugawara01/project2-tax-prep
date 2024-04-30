import { createSlice } from '@reduxjs/toolkit'

const financialInformationSlice = createSlice({
    name: 'financialInformation',
    initialState: {
        financialInformationId: '',
        incomeW2: '',
        withholdingsW2: '',
        income1099: '',
        deductions: '',
        isMarried: '',
        isStandardDeduction: '',
        userId: null
    },
    reducers: {
        updateFinancialInformation(state, action) {
            const financialInformation = action.payload;

            // update the state to equal the financial information from the payload
            state.financialInformationId = financialInformation.financialInformationId;
            state.incomeW2 = financialInformation.incomeW2;
            state.withholdingsW2 = financialInformation.withholdingsW2;
            state.income1099 = financialInformation.income1099;
            state.deductions = financialInformation.deductions;
            state.isMarried = financialInformation.isMarried;
            state.isStandardDeduction = financialInformation.isStandardDeduction;
            state.userId = financialInformation.userId;

        }
    }
})

export const { updateFinancialInformation } = financialInformationSlice.actions;
export default financialInformationSlice.reducer;