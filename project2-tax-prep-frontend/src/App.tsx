import './App.css';
import Footer from './components/Footer/Footer';
import TrussHeader from './components/TrussHeader/TrussHeader';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import AnimatedRoutes from './components/AnimatedRoutes.tsx';

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
            <AnimatedRoutes />
            <Footer />
        </div>
    )
}

