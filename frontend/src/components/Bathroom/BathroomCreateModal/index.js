import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import BathroomCreateModal from './BathroomCreateModal';

export default function BathroomCreate({
  openMenu,
  bathroomToUpdate,
  setUpdatedOrCreatedBR,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
        }}
        style={
          !!bathroomToUpdate
            ? { color: 'rgb(242, 160, 84, 0.9)' }
            : { color: 'rgb(52, 168, 226)' }
        }
      >
        {!!bathroomToUpdate ? 'Update' : 'New Toilet Listing'}
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            if (openMenu) openMenu();
          }}
        >
          <BathroomCreateModal
            bathroomToUpdate={bathroomToUpdate}
            setShowModal={setShowModal}
            setUpdatedOrCreatedBR={setUpdatedOrCreatedBR}
          />
        </Modal>
      )}
    </>
  );
}
