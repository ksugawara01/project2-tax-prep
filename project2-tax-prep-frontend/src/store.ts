import { configureStore } from '@reduxjs/toolkit'
import financialInformationSlice from './slices/financialInformationSlice';
import personalInformationSlice from './slices/personalInformationSlice';
import returnStatusSlice from './slices/returnStatusSlice';
import currentLanguageSlice from './slices/currentLanguageSlice';

const store = configureStore({
    reducer:{
        financialInformation: financialInformationSlice, // using the reducer from financialInformationSlice
        personalInformation: personalInformationSlice,
        returnStatus: returnStatusSlice,
        currentLanguage: currentLanguageSlice
    }
})

export default store;