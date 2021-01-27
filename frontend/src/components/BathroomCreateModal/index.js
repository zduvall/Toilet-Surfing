import { useState } from 'react';
import { Modal } from '../../context/Modal';
import BathroomCreateModal from './BathroomCreateModal';

export default function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
        }}
      >
        Add Bathroom
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BathroomCreateModal />
        </Modal>
      )}
    </>
  );
}
