import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getBathrooms } from '../../store/bathroom';

// import { querySelectorAllRegex } from './mapsUtils';

export default function Map({ setSelectedBathroomId }) {
  const dispatch = useDispatch();

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  // const [markersOnScreen, setMarkersOnScreen] = useState();

  const { bathrooms } = useSelector((state) => state);
  const bathroomsArray = Object.values(bathrooms);

  useEffect(() => {
    dispatch(getBathrooms());
  }, [dispatch]);

  const containerStyle = {
    width: '100%',
    height: '420px',
  };
  const center = {
    lat: lat || 40.867011,
    lng: lng || -99.329509,
  };

  useEffect(() => {
    function geolocate() {
      if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          onGeolocateSuccess,
          onGeolocateError
        );
      }
    }

    function onGeolocateSuccess(coordinates) {
      setLat(coordinates.coords.latitude);
      setLng(coordinates.coords.longitude);
    }

    function onGeolocateError(error) {
      console.warn(error.code, error.message);

      if (error.code === 1) {
        // they said no
      } else if (error.code === 2) {
        // position unavailable
      } else if (error.code === 3) {
        // timeout
      }
    }

    geolocate();
  }, [lat, lng]);

  function handleMarkerClick(e, bathroom) {
    setSelectedBathroomId(bathroom.id);
    setLat(e.latLng.lat());
    setLng(e.latLng.lng());
  }

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap
          id='search-map'
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          // onBoundsChanged={() => console.log()}
        >
          {bathroomsArray.map((bathroom) => {
            return (
              <Marker
                className='marker'
                key={bathroom.name}
                position={{
                  lat: Number(bathroom.lat),
                  lng: Number(bathroom.lng),
                }}
                title={`"${bathroom.name}"\n${bathroom.locality}, ${bathroom.administrativeArea}`}
                onClick={(e) => handleMarkerClick(e, bathroom)}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
