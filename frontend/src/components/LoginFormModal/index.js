import { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

export default function LoginFormModal({ openMenu }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          // debugger;
          setShowModal(true);
          e.stopPropagation();
        }}
      >
        Log In
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            if (openMenu) openMenu();
          }}
        >
          <LoginForm />
        </Modal>
      )}
    </>
  );
}
