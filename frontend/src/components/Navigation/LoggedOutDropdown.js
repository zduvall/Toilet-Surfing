import { useState, useEffect, createContext, useContext } from 'react';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';

// const LoggedOutContext = createContext();
// export const useLoggedOutContext = () => useContext(LoggedOutContext);

export default function SessionLinksDropdown() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  return (
    <>
      <button onClick={openMenu}>
        <i className='fas fa-water'></i>
      </button>
      {showMenu && (
        // <LoggedOutContext.Provider value={setShowMenu}>
        <ul className='navbar__dropdown navbar__dropdown-collapse'>
          <li className='navbar__dropdown__button'>
            <LoginFormModal />
          </li>
          <li className='navbar__dropdown__button'>
            <SignUpFormModal />
          </li>
        </ul>
        // </LoggedOutContext.Provider>
      )}
    </>
  );
}
