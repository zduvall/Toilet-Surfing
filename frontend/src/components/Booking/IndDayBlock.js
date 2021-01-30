import IndHourBlock from './IndHourBlock';

export default function IndDayBlock({ day }) {
  const curDay = day;
  return (
    <div className='ind-day-block'>
      <div className='date-header-container'>
        <h1 className='date-header'>{curDay.toString().slice(0, 11)}</h1>
      </div>
      <div className='hours-block'>
        <IndHourBlock day={day} hour={'6'} />
        <IndHourBlock day={day} hour={'7'} />
        <IndHourBlock day={day} hour={'8'} />
        <IndHourBlock day={day} hour={'9'} />
        <IndHourBlock day={day} hour={'10'} />
        <IndHourBlock day={day} hour={'11'} />
        <IndHourBlock day={day} hour={'12'} />
        <IndHourBlock day={day} hour={'1'} />
        <IndHourBlock day={day} hour={'2'} />
        <IndHourBlock day={day} hour={'3'} />
        <IndHourBlock day={day} hour={'4'} />
        <IndHourBlock day={day} hour={'5'} />
        <IndHourBlock day={day} hour={'6'} />
        <IndHourBlock day={day} hour={'7'} />
        <IndHourBlock day={day} hour={'8'} />
        <IndHourBlock day={day} hour={'9'} />
        <IndHourBlock day={day} hour={'10'} />
      </div>
    </div>
  );
}
