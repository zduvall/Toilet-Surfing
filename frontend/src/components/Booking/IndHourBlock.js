import IndHourBlockButton from './IndHourBlockButton';

export default function IndHourBlock({ day, hour, amPm }) {
  return (
    <div className='ind-hour-block'>
      <IndHourBlockButton
        day={day}
        hour={hour}
        time={`${hour}:00`}
        amPm={amPm}
      />
      <IndHourBlockButton
        day={day}
        hour={hour}
        time={`${hour}:15`}
        amPm={amPm}
      />
      <IndHourBlockButton
        day={day}
        hour={hour}
        time={`${hour}:30`}
        amPm={amPm}
      />
      <IndHourBlockButton
        day={day}
        hour={hour}
        time={`${hour}:45`}
        amPm={amPm}
      />
    </div>
  );
}
