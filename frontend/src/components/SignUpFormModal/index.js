import { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

export default function SignUpFormModal({ openMenu }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
        }}
      >
        Sign Up
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            openMenu();
          }}
        >
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}
