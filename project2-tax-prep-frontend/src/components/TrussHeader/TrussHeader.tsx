import { Header, NavMenuButton, Title, PrimaryNav, Search, NavDropDownButton, Menu, LanguageSelector } from '@trussworks/react-uswds'
import { useState } from 'react'
import './TrussHeader.css'

export default function TrussHeader() {
    const [expanded, setExpanded] = useState(false);

    const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);

    const testItemsMenu = [
      <a href="#two" key="two" className="usa-nav__link">
          <span>Parent link</span>
      </a>,
      <a href="#three" key="three" className="usa-nav__link">
          <span>Parent link</span>
      </a>,
      <LanguageSelector
          label="Languages"
          langs={[
              {
                attr: 'ar',
                label: 'العربية',
                label_local: 'Arabic',
                on_click: function Ga(){}
              },
              {
                attr: 'zh',
                label: '简体字',
                label_local: 'Chinese - Simplified',
                on_click: function Ga(){}
              },
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
                attr: 'fr',
                label: 'Français',
                label_local: 'French',
                on_click: function Ga(){}
              },
              {
                attr: 'it',
                label: 'Italiano',
                label_local: 'Italian',
                on_click: function Ga(){}
              },
              {
                attr: 'ru',
                label: 'Pусский',
                label_local: 'Russian',
                on_click: function Ga(){}
              }
          ]}
      />
    ];

    return(
        <Header id='truss-header' basic={true} showMobileOverlay={expanded}>
            <div className="usa-nav-container">
                <div className="usa-navbar">
                    <Title>Fake Tax Company</Title>
                </div>
                <PrimaryNav items={testItemsMenu} mobileExpanded={expanded} onToggleMobileNav={onClick}></PrimaryNav>
            </div>
        </Header>
    )
}