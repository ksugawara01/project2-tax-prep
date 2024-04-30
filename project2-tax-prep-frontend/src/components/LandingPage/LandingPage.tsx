import { Button } from '@trussworks/react-uswds';
import './LandingPage.css'
import bankIcon from '../../assets/bank.png'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const handleStartReturn = () => {
        navigate('/personal-information')
    }

    return(
        <>
            <img id='bank-icon' src={bankIcon} alt='icon of a cartoon bank'/>
            <div id='free-return-text'>{t('landingPage.freeReturns')}</div>
            <div id='e-file-text'>{t('landingPage.fileDirectly')}</div>
            <Button id='landing-page-button' type='button' onClick={handleStartReturn}>{t('button.startReturn')}</Button>
        </>
    )
}