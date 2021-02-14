export default function BathroomInfo({ curBathroom }) {
  return (
    <>
      <p>{curBathroom.description}</p>
      <p className='single-bathroom__address'>
        {curBathroom.streetNumber} {curBathroom.route}
      </p>
      {curBathroom.id === 1 && <p>&nbsp;&nbsp;</p>}
      <p
        className='single-bathroom__address'
        style={curBathroom.id === 1 ? { color: 'black' } : {}}
      >
        {curBathroom.locality}, {curBathroom.administrativeArea}
      </p>
      {curBathroom.id === 1 && <p>&nbsp;&nbsp;</p>}
      <p className='single-bathroom__address'>
        {curBathroom.postalCode} {curBathroom.country}
      </p>
      {curBathroom.id === 1 && <p>&nbsp;&nbsp;</p>}
      {curBathroom.id === 1 && <p>&nbsp;&nbsp;</p>}
      <p className='lat-lng'>
        {`Lat: ${curBathroom.lat} \u00A0 - \u00A0 Lng: ${curBathroom.lng}`}
      </p>
      {curBathroom.id === 1 && <p>&nbsp;&nbsp;</p>}
      {curBathroom.id === 1 && <p>&nbsp;&nbsp;</p>}
    </>
  );
}
