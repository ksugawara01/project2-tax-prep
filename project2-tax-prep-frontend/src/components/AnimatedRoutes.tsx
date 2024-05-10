import { Route, Routes, useLocation } from "react-router-dom";
import CreateAccountForm from "./CreateAccountForm/CreateAccountForm.tsx";
import FinancialInformationForm from "./FinancialInformationForm/FinancialInformationForm.tsx";
import LandingPage from "./LandingPage/LandingPage.tsx";
import PersonalInformationForm from "./PersonalInformationForm/PersonalInformationForm.tsx";
import ResultsPage from "./ResultsPage/ResultsPage.tsx";
import ReviewPage from "./ReviewPage/ReviewPage.tsx";
import SignInForm from "./SignInForm/SignInForm.tsx";
import ProfilePage from "./ProfilePage/ProfilePage.tsx";
import { AnimatePresence } from 'framer-motion';

// Component to allow framer-motion animations
export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<LandingPage />}/>
                <Route path='/personal-information' element={<PersonalInformationForm />} />
                <Route path='/financial-information' element={<FinancialInformationForm />} />
                <Route path='/review' element={<ReviewPage />} />
                <Route path='/results' element={<ResultsPage />} />
                <Route path='/sign-in' element={<SignInForm />} />
                <Route path='/create-account' element={<CreateAccountForm />} /> 
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </AnimatePresence>
    )
}