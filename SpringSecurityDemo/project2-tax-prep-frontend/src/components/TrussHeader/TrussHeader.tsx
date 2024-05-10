import { Header, PrimaryNav, LanguageSelector } from '@trussworks/react-uswds'
import { useEffect, useState } from 'react'
import './TrussHeader.css'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentLanguage } from '../../slices/currentLanguageSlice';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService';

export default function TrussHeader() {

    const { t } = useTranslation();

    // get current language from the store
    const currentLanguage = useSelector((store : any) => store.currentLanguage)
    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(UserService.isAuthenticated());
    const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());

    const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);

        // Log financialInformation whenever it changes
        useEffect(() => {
          console.log('current language:', currentLanguage);
      }, [currentLanguage]);

    const handleLogout = () => {
      const confirmDelete = window.confirm('Are you sure you want to logout this user?');
      if (confirmDelete) {
          UserService.logout();
          setIsAuthenticated(UserService.isAuthenticated());
          setIsAdmin(UserService.isAdmin());
      }
    };

    const testItemsMenu = [
      <Link to='/' className='usa-nav__link'>
          <span>Home</span>
      </Link>,

      isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>,

      isAuthenticated ? <Link to='/profile' className='usa-nav__link'><span>Profile</span></Link> : null,

      isAuthenticated ? <Link to='/' className='usa-nav__link' onClick={handleLogout}><span>Logout</span></Link> :
      <Link to='/create-account' className='usa-nav__link'><span>Sign Up</span></Link>,

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
                    <Link id='header-company-name' to='/'>Fake Tax Company</Link>
                </div>
                <PrimaryNav id='primary-nav' items={testItemsMenu} mobileExpanded={expanded} onToggleMobileNav={onClick}></PrimaryNav>
            </div>
        </Header>
    )
}