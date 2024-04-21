import './App.css';
import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import TrussHeader from './components/TrussHeader/TrussHeader';
import FinancialInformationForm from './components/FinancialInformationForm/FinancialInformationForm.tsx';
import PersonalInformationForm from './components/PersonalInformationForm/PersonalInformationForm.tsx'
import ReviewPage from './components/ReviewPage/ReviewPage.tsx';
import ResultsPage from './components/ResultsPage/ResultsPage.tsx'

export default function App() {

    return (
        <div className='flex-column-center'>
            <TrussHeader />
            <Routes>
                <Route path='/' element={<LandingPage />}/>
                <Route path='/personal-information' element={<PersonalInformationForm />} />
                <Route path='/financial-information' element={<FinancialInformationForm />} />
                <Route path='/review' element={<ReviewPage />} />
                <Route path='/results' element={<ResultsPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

