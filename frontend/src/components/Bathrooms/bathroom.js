import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Bathroom() {
  const { bathroomId } = useParams();
  const bathrooms = useSelector(({ bathrooms }) => bathrooms);

  const curBathroom = bathrooms[bathroomId]
  console.log(curBathroom);

  return (
    <>
      <h1>{curBathroom.name}</h1>
      <p>{curBathroom.bathroomOwnerId}</p>
      <p>{curBathroom.description}</p>
      <p>{curBathroom.picture}</p>
      <p>{curBathroom.streetNumber}</p>
      <p>{curBathroom.route}</p>
      <p>{curBathroom.locality}</p>
      <p>{curBathroom.administrativeArea}</p>
      <p>{curBathroom.postalCode}</p>
      <p>{curBathroom.country}</p>
      <p>{curBathroom.lat}</p>
      <p>{curBathroom.lng}</p>
    </>
  );
}
