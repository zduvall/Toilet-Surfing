import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import thunks
import { createBathroom } from '../../../store/bathroom';

const BathroomCreateModal = ({ bathroomToUpdate, setShowModal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [streetNumber, setStreetNumber] = useState('');
  const [route, setRoute] = useState('');
  const [locality, setLocality] = useState('');
  const [administrativeArea, setAdministrativeArea] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  // // for multuple file upload
  // const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  // set default values if using form to update
  useEffect(() => {
    if (!!bathroomToUpdate) {
      setName(bathroomToUpdate.name);
      setDescription(bathroomToUpdate.description);
      setImage(bathroomToUpdate.image);
      setStreetNumber(bathroomToUpdate.streetNumber);
      setRoute(bathroomToUpdate.route);
      setLocality(bathroomToUpdate.locality);
      setAdministrativeArea(bathroomToUpdate.administrativeArea);
      setPostalCode(bathroomToUpdate.postalCode);
      setCountry(bathroomToUpdate.country);
      setLat(bathroomToUpdate.lat);
      setLng(bathroomToUpdate.lng);
    }
  }, [bathroomToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    let newErrors = [];

    let bathroomObj = {
      bathroomOwnerId: user.id,
      name,
      description,
      image,
      streetNumber,
      route,
      locality,
      administrativeArea,
      postalCode,
      country,
      lat,
      lng,
    };

    dispatch(
      !!bathroomToUpdate
        ? createBathroom(bathroomObj, bathroomToUpdate.id) // if you pass in a bathroom id, it updates instead
        : createBathroom(bathroomObj)
    )
      .then((res) => {
        setShowModal(false);
      })
      .catch((res) => {
        if (res.data && res.data.errors) {
          newErrors = res.data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  // for multiple file upload
  //   const updateFiles = (e) => {
  //     const files = e.target.files;
  //     setImages(files);
  //   };

  return (
    <div>
      <h1> {!!bathroomToUpdate ? 'Update Toilet' : 'New Toilet Listing'}</h1>
      <form
        encType='multipart/form-data'
        style={{ display: 'flex', flexFlow: 'column' }}
        onSubmit={handleSubmit}
      >
        <label>
          Bathroom Name
          <input
            type='text'
            placeholder="Potty Like it's 1999"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label for='descriptino'>Description</label>
        <textarea
          id='description'
          placeholder="I was dreamin' when I wrote this, forgive me if it goes astray, but when you wake up in the morning, you'll be glad this room began your day. Please stop by and use this bathroom ;)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          cols='37'
          rows='5.5'
        />
        <label>
          Image
          <input className='image-upload' type='file' onChange={updateFile} />
        </label>
        <label>
          Street Number
          <input
            type='input'
            placeholder='1556'
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
          />
        </label>
        <label>
          Route
          <input
            type='input'
            placeholder='Broadway'
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          />
        </label>
        <label>
          Locality
          <input
            type='input'
            placeholder='New York'
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
        </label>
        <label>
          Administrative Area
          <input
            type='input'
            placeholder='NY'
            value={administrativeArea}
            onChange={(e) => setAdministrativeArea(e.target.value)}
          />
        </label>
        <label>
          Postal Code
          <input
            type='input'
            placeholder='10120'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>
        <label>
          Country
          <input
            type='input'
            placeholder='United States'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label>
          Latitude
          <input
            type='input'
            placeholder='40.758404'
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </label>
        <label>
          Longitude
          <input
            type='input'
            placeholder='-73.985478'
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </label>
        {/* <label>
          Multiple Upload
          <input type='file' multiple onChange={updateFiles} />
        </label> */}
        <button className='form__button' type='submit' disabled={!user}>
          {!!bathroomToUpdate ? 'Update Toilet' : 'List Toilet'}
        </button>
      </form>
      {!user && (
        <ul>
          <li>Must be logged in to add a toilet.</li>
        </ul>
      )}
      <div className={errors.length ? 'errors' : ''}>
        {errors.length > 0 &&
          errors.map((error) => <div key={error}>{error}</div>)}
      </div>
    </div>
  );
};

export default BathroomCreateModal;
