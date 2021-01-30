import IndHourBlockButton from './IndHourBlockButton';

export default function IndHourBlock({ hour }) {
  return (
    <div className='ind-hour-block'>
      <IndHourBlockButton hour={hour} time={`${hour}:00`} />
      <IndHourBlockButton hour={hour} time={`${hour}:15`} />
      <IndHourBlockButton hour={hour} time={`${hour}:30`} />
      <IndHourBlockButton hour={hour} time={`${hour}:45`} />
    </div>
  );
}
