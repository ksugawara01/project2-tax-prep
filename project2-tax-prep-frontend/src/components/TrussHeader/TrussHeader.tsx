import { Header, NavMenuButton, Title, PrimaryNav, Search, NavDropDownButton, Menu, LanguageSelector } from '@trussworks/react-uswds'
import { useEffect, useState } from 'react'
import './TrussHeader.css'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentLanguage } from '../../slices/currentLanguageSlice';

export default function TrussHeader() {

    const { t } = useTranslation();

    // get current language from the store
    const currentLanguage = useSelector((store : any) => store.currentLanguage)
    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState(false);

    const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);

    const handleLanguageSwitch = () => {
        dispatch(updateCurrentLanguage('en'))
        
    }

        // Log financialInformation whenever it changes
        useEffect(() => {
          console.log('current language:', currentLanguage);
      }, [currentLanguage]);

    const testItemsMenu = [
      <a href='#two' key='two' className='usa-nav__link'>
          <span>Parent link</span>
      </a>,
      <a href='#three' key='three' className='usa-nav__link'>
          <span>Parent link</span>
      </a>,
      <LanguageSelector
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
                    <Title>Fake Tax Company</Title>
                </div>
                <PrimaryNav items={testItemsMenu} mobileExpanded={expanded} onToggleMobileNav={onClick}></PrimaryNav>
            </div>
        </Header>
    )
}