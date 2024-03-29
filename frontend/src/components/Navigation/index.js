import { useSelector } from 'react-redux';
import { useWindowWidth } from '../customHooks';

// import components
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import MyBookingsModal from '../Booking/MyBookingsModal';
import MyBathroomsModal from '../Bathroom/MyBathroomsModal';
import MyFavoritesModal from '../FavoriteStar/MyFavoritesModal';
import LoggedInDropdown from './LoggedInDropdown';
import SessionLinksDropdown from './SessionLinksDropdown';

import './Navigation.css';

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const width = useWindowWidth();

  let sessionLinks;

  if (sessionUser) {
    if (width > 800) {
      sessionLinks = (
        <>
          <li className='nav__item'>
            <MyBookingsModal />
          </li>
          <li className='nav__item'>
            <MyBathroomsModal />
          </li>
          <li className='nav__item'>
            <MyFavoritesModal />
          </li>
          <li className='nav__item'>
            <ProfileButton user={sessionUser} />
          </li>
        </>
      );
    } else {
      sessionLinks = <LoggedInDropdown />;
    }
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
        <a className='site-header__title' href='/'>
          Toilet Surfing
        </a>
        <nav className='nav'>
          <ul className='nav__wrapper'>{isLoaded && sessionLinks}</ul>
        </nav>
      </div>
    </header>
  );
}
