import { useState, useEffect, createContext, useContext } from 'react';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';

export default function SessionLinksDropdown() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    let show = true;
    if (showMenu) show = false;
    // if (showMenu) return; // delete two lines above, comment in this line and the stuff below to allow click anywhere close, but that prevents clicking into the form
    setShowMenu(show);
  };

  // const closeMenu = () => {
  //   setShowMenu(false);
  // };

  // useEffect(() => {
  //   if (!showMenu) return;
  //   document.addEventListener('click', closeMenu);
  //   return () => document.removeEventListener('click', closeMenu);
  // }, [showMenu]);

  return (
    <>
      <button onClick={openMenu}>
        <i className={showMenu ? 'far fa-window-close' : 'fas fa-water'}></i>
      </button>
      {showMenu && (
        <ul className='navbar__dropdown navbar__dropdown-collapse'>
          <li className='navbar__dropdown__button'>
            <LoginFormModal />
          </li>
          <li className='navbar__dropdown__button'>
            <SignUpFormModal />
          </li>
        </ul>
      )}
    </>
  );
}
