import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurBathroomIdAction } from '../../../store/curBathroom';

const MyBookingsModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { session, bookings, bathrooms } = useSelector((state) => state);
  const curUserBookings = bookings.filter(
    (booking) => booking.userId === session.user.id
  );

  return (
    <div>
      <h1>My Bookings</h1>
      {curUserBookings.map((booking) => {
        let now = new Date();

        // starting time
        let amPmStart = 'am';
        let timeStart = new Date(booking.dateTimeStart);
        let hoursStart = timeStart.getHours();
        if (hoursStart >= 12) amPmStart = 'pm';
        if (hoursStart > 12) hoursStart = hoursStart - 12;
        timeStart.setHours(hoursStart);

        // ending time
        let amPmEnd = 'am';
        let timeEnd = new Date(booking.dateTimeEnd);
        if (timeEnd < now) return <></>;
        let hoursEnd = timeEnd.getHours();
        if (hoursEnd >= 12) amPmEnd = 'pm';
        if (hoursEnd > 12) hoursEnd = hoursEnd - 12;
        timeEnd.setHours(hoursEnd);

        return (
          <div className='mybookings-container'>
            <h3
              className='mybookings__br-name'
              onClick={(e) => {
                dispatch(setCurBathroomIdAction(booking.bathroomId));
                setShowModal(false);
                return false;
              }}
            >
              {bathrooms[booking.bathroomId].name}
            </h3>
            <p className='mybookings__time'>
              {timeStart.toTimeString().slice(0, 9)} {amPmStart} -{' '}
              {timeEnd.toTimeString().slice(0, 9)} {amPmEnd}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MyBookingsModal;
