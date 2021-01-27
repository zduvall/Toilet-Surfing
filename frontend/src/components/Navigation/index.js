import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useWindowWidth } from '../customHooks';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import SessionLinksDropdown from './SessionLinksDropdown';

import './Navigation.css';

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const width = useWindowWidth();

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <li className='nav__item'>
        <ProfileButton user={sessionUser} />
      </li>
    );
  } else {
    if (width > 800) {
      sessionLinks = (
        <>
          <li className='nav__item'>
            <LoginFormModal />
          </li>
          <li className='nav__item'>
            <SignUpFormModal />
          </li>
        </>
      );
    } else {
      sessionLinks = <SessionLinksDropdown />;
    }
  }

  return (
    <header
      className='site-header'
      style={{
        position: window.location.pathname === '/' ? 'fixed' : 'sticky',
      }}
    >
      <div className='site-header__wrapper'>
        <a href='/'>Toilet Surfing</a>
        <nav className='nav'>
          <ul className='nav__wrapper'>
            <li className='nav__item'>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            {isLoaded && sessionLinks}
          </ul>
        </nav>
      </div>
    </header>
  );
}
