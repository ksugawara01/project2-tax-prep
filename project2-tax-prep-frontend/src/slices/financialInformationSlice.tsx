import { createSlice } from '@reduxjs/toolkit'

const financialInformationSlice = createSlice({
    name: 'financialInformation',
    initialState: {
        financialInformationId: '',
        incomeW2: '',
        withholdingsW2: '',
        income1099: '',
        deductions: '',
        married: '',
        standardDeduction: '',
        dependents: '',
        aotc: '',
        cleanEnergy: '',
        incomeW2Default: true,
        withholdingsW2Default: true,
        income1099Default: true,
        deductionsDefault: true,
        marriedDefault: true,
        standardDeductionDefault: true,
        dependentsDefault: false,
        aotcDefault: false,
        cleanEnergyDefault: false,
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
            state.dependents = financialInformation.dependents;
            state.married = financialInformation.married;
            state.standardDeduction = financialInformation.standardDeduction;
            state.aotc = financialInformation.aotc;
            state.cleanEnergy = financialInformation.cleanEnergy;
            state.incomeW2Default = financialInformation.incomeW2Default;
            state.withholdingsW2Default = financialInformation.withholdingsW2Default;
            state.income1099Default = financialInformation.income1099Default;
            state.deductionsDefault = financialInformation.deductionsDefault;
            state.dependentsDefault = financialInformation.dependentsDefault;
            state.marriedDefault = financialInformation.marriedDefault;
            state.standardDeductionDefault = financialInformation.standardDeductionDefault;
            state.aotcDefault = financialInformation.aotcDefault;
            state.cleanEnergyDefault = financialInformation.cleanEnergyDefault;
            state.userId = financialInformation.userId;

        }
    }
})

export const { updateFinancialInformation } = financialInformationSlice.actions;
export default financialInformationSlice.reducer;