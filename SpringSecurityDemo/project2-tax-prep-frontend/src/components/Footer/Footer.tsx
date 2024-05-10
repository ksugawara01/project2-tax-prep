import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {

    const { t } = useTranslation();
    return(
        <div id='footer'>
            <div >{t('footer.links')}</div>
            <div>© 2024 Fake Tax Company</div>
        </div>
    )
}
