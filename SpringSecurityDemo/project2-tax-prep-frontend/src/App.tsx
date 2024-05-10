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
import UserService from './services/UserService.ts';
import UserManagementPage from './components/userspage/UserManagementPage.tsx';
import UpdateUser from './components/userspage/UpdateUser.tsx';
import ProfilePage from './components/userspage/ProfilePage.tsx';

export default function App() {

    const { i18n } = useTranslation();

    const language = useSelector((store : any) => store.currentLanguage)

    // change the internationalization language each time the current language store is updated
    useEffect(() => {
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
                <Route path="/profile" element={<ProfilePage />} />

                {/* Check if user is authenticated and admin before rendering admin-only routes */}
                {UserService.adminOnly() && (
                    <>
                        <Route path="/admin/user-management" element={<UserManagementPage />} />
                        <Route path="/update-user/:userId" element={<UpdateUser />} />
                    </>
                )}
            </Routes>
            <Footer />
        </div>
    )
}

