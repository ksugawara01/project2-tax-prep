import { Button } from '@trussworks/react-uswds';
import './LandingPage.css'
import bankIcon from '../../assets/bank.png'
import { useTranslation } from 'react-i18next';

export default function LandingPage() {

    const { t } = useTranslation();

    return(
        <>
            <img id='bank-icon' src={bankIcon} alt='icon of a cartoon bank'/>
            <div id='free-return-text'>{t('landingPage.freeReturns')}</div>
            <div id='e-file-text'>{t('landingPage.fileDirectly')}</div>
            <Button id='landing-page-button' type='submit'>{t('button.startReturn')}</Button>
        </>
    )
}