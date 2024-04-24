import { Header, NavMenuButton, Title, PrimaryNav, Search, NavDropDownButton, Menu, LanguageSelector } from '@trussworks/react-uswds'
import { useState } from 'react'
import './TrussHeader.css'
import { useTranslation } from 'react-i18next';

export default function TrussHeader() {

    const { t } = useTranslation();

    const [expanded, setExpanded] = useState(false);

    const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);

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
                on_click: function Ga(){}
              },
              {
                attr: 'es',
                label: 'Español',
                label_local: 'Spanish',
                on_click: function Ga(){}
              },
              {
                attr: 'jp',
                label: '日本語',
                label_local: 'Japanese',
                on_click: function Ga(){}
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