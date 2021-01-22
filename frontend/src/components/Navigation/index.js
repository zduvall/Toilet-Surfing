import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

// edit below, pick one or the other. Top one for reagular login, bottom for modular
// also make sure the same (top or bottom) is commented in in app.js. Delete modal context
// if not going to use modal

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/sign-up'>Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to='/'>
          Home
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}


// export default function Navigation({ isLoaded }) {
//   const sessionUser = useSelector((state) => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = <ProfileButton user={sessionUser} />;
//   } else {
//     sessionLinks = (
//       <>
//         <LoginFormModal />
//         <NavLink to='/signup'>Sign Up</NavLink>
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