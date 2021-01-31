import { useSelector } from 'react-redux';

const MyBookingsModal = ({ openMenu }) => {
  const { session, bookings } = useSelector((state) => state);

  return (
    <div>
      <h1>My Bookings</h1>
    </div>
  );
};

export default MyBookingsModal;
