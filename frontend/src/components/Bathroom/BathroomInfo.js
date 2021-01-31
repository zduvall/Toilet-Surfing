export default function BathroomInfo({ curBathroom }) {
  return (
    <>
      <p>{curBathroom.description}</p>
      <p>
        {curBathroom.streetNumber} {curBathroom.route}
      </p>
      {!curBathroom.streetNumber && <p>&nbsp;&nbsp;</p>}
      <p>
        {curBathroom.locality}, {curBathroom.administrativeArea}
      </p>
      <p>{curBathroom.postalCode}</p>
      {!curBathroom.streetNumber && <p>&nbsp;&nbsp;</p>}
      <p>{curBathroom.country}</p>
      {!curBathroom.streetNumber && <p>&nbsp;&nbsp;</p>}
      <p className='lat-lng'>
        {`Lat: ${curBathroom.lat} \u00A0 - \u00A0 Lng: ${curBathroom.lng}`}
      </p>
      {!curBathroom.streetNumber && <p>&nbsp;&nbsp;</p>}
      {!curBathroom.streetNumber && <p>&nbsp;&nbsp;</p>}

      {/* <p className='lat-lng'>Longitude: {curBathroom.lng}</p> */}
    </>
  );
}
