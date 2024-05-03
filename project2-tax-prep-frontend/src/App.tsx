import './App.css';
import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import TrussHeader from './components/TrussHeader/TrussHeader';
import FinancialInformationForm from './components/FinancialInformationForm/FinancialInformationForm.tsx';
import PersonalInformationForm from './components/PersonalInformationForm/PersonalInformationForm.tsx'
import ReviewPage from './components/ReviewPage/ReviewPage.tsx';
import ResultsPage from './components/ResultsPage/ResultsPage.tsx'

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import SignInForm from './components/SignInForm/SignInForm.tsx';
import CreateAccountForm from './components/CreateAccountForm/CreateAccountForm.tsx';

export default function App() {

    const { i18n } = useTranslation();

    const language = useSelector((store : any) => store.currentLanguage)

    // change the internationalization language each time the current language store is updated
    useEffect(() => {
        console.log('language', language)
        const lng = language.language;
        i18n.changeLanguage(lng);
    }, [language])

    return (
        <div className='flex-column-center'>
            <TrussHeader />
            <Routes>
                <Route path='/' element={<LandingPage />}/>
                <Route path='/personal-information' element={<PersonalInformationForm />} />
                <Route path='/financial-information' element={<FinancialInformationForm />} />
                <Route path='/review' element={<ReviewPage />} />
                <Route path='/results' element={<ResultsPage />} />
                <Route path='/sign-in' element={<SignInForm />} />
                <Route path='/create-account' element={<CreateAccountForm />} /> 
            </Routes>
            <Footer />
        </div>
    )
}

