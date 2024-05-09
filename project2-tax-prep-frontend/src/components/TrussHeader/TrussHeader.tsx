import { Header, Title, PrimaryNav, LanguageSelector } from '@trussworks/react-uswds'
import { useEffect, useState } from 'react'
import './TrussHeader.css'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentLanguage } from '../../slices/currentLanguageSlice';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/logo.png'

export default function TrussHeader() {

    const { t } = useTranslation();

    // get current language from the store
    const currentLanguage = useSelector((store : any) => store.currentLanguage)
    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState(false);

    const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);

        // Log financialInformation whenever it changes
        useEffect(() => {
          console.log('current language:', currentLanguage);
      }, [currentLanguage]);

    const testItemsMenu = [
      <Link to='/' id='header-home' className='usa-nav__link'>
          <span>{t('header.home')}</span>
      </Link>,
      <Link to='/create-account' id='header-create-account' className='usa-nav__link'>
          <span>{t('header.signUp')}</span>
      </Link>,
      <LanguageSelector id='language-selector'
          label={t('header.languages')}
          langs={[
              {
                attr: 'en',
                label: 'English',
                on_click: function Ga(){dispatch(updateCurrentLanguage({language: 'en'}))}
              },
              {
                attr: 'es',
                label: 'Español',
                label_local: 'Spanish',
                on_click: function Ga(){dispatch(updateCurrentLanguage({language: 'es'}))}
              },
              {
                attr: 'jp',
                label: '日本語',
                label_local: 'Japanese',
                on_click: function Ga(){dispatch(updateCurrentLanguage({language: 'jp'}))}
              }
          ]}
      />
    ];

    return(
        <Header id='truss-header' basic={true} showMobileOverlay={expanded}>
            <div className='usa-nav-container'>
                <div className='usa-navbar'>
                    <Link id='header-company-name' to='/'><img src={headerLogo} /></Link>
                </div>
                <PrimaryNav id='primary-nav' items={testItemsMenu} mobileExpanded={expanded} onToggleMobileNav={onClick}></PrimaryNav>
            </div>
        </Header>
    )
}