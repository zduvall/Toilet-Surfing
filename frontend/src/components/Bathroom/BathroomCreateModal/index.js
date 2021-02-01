import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import BathroomCreateModal from './BathroomCreateModal';

export default function BathroomCreate({ openMenu, bathroomToUpdate }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
        }}
        style={!!bathroomToUpdate ? { color: 'rgb(242, 160, 84, 0.9)' } : {}}
      >
        {!!bathroomToUpdate ? 'Update' : 'List Toilet'}
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            if (openMenu) openMenu();
          }}
        >
          <BathroomCreateModal bathroomToUpdate={bathroomToUpdate} />
        </Modal>
      )}
    </>
  );
}
