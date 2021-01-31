import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import BathroomCreateModal from './BathroomCreateModal';

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
        List Toilet
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            if(openMenu) openMenu();
          }}
        >
          <BathroomCreateModal />
        </Modal>
      )}
    </>
  );
}
