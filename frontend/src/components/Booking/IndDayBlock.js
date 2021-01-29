import IndHourBlock from './IndHourBlock';

export default function IndDayBlock({ day }) {
  const curDay = day;
  return (
    <div className='ind-day-block'>
      <div className='date-header-container'>
        <h1 className='date-header'>{curDay.toString().slice(0, 11)}</h1>
      </div>
      <div className='hours-block'>
        <IndHourBlock hour={'6'} />
        <IndHourBlock hour={'7'} />
        <IndHourBlock hour={'8'} />
        <IndHourBlock hour={'9'} />
        <IndHourBlock hour={'10'} />
        <IndHourBlock hour={'11'} />
        <IndHourBlock hour={'12'} />
        <IndHourBlock hour={'1'} />
        <IndHourBlock hour={'2'} />
        <IndHourBlock hour={'3'} />
      </div>
    </div>
  );
}
