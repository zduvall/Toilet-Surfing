import { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
// import { useLoggedOutContext } from '../Navigation/LoggedOutDropdown';

export default function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  // const setShowMenu = useLoggedOutContext();

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
          // setShowMenu(false);
        }}
      >
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}
