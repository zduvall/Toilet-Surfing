import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';

// edit below, pick one or the other. Top one for reagular login, bottom for modular
// also make sure the same (top or bottom) is commented in in App.js.
// if use modular, delete src/components/LoginFormPage & src/components/SignUpFormPage
// if use non-modular, delete src/components/LoginFormModal, src/components/SignUpFormModal, & Modal src/context/Modal.js + .../Modal.css

// export default function Navigation({ isLoaded }) {
//   const sessionUser = useSelector((state) => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = <ProfileButton user={sessionUser} />;
//   } else {
//     sessionLinks = (
//       <>
//         <NavLink to='/login'>Log In</NavLink>
//         <NavLink to='/sign-up'>Sign Up</NavLink>
//       </>
//     );
//   }

//   return (
//     <ul>
//       <li>
//         <NavLink exact to='/'>
//           Home
//         </NavLink>
//         {isLoaded && sessionLinks}
//       </li>
//     </ul>
//   );
// }

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpFormModal />
      </>
    );
  }

  return (
    <header className='site-header'>
      <div className='site-header__wrapper'>
        <a href='#'>Brand</a>
        <nav className='nav'>
          <ul className='nav__wrapper'>
            <li className='nav__item'>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav__item'>{isLoaded && sessionLinks}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
