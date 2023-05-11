import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Googlemaps = ({ width, height }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC9Zst0uBpxGJ2P4LLv3IMATpN9Ppl4ImI',
  });

  const containerStyle = {
    width,
    height,
    margin: 'auto',
    marginBottom: '10px',
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((map) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);
  return (
    <div>
      {isLoaded ? (
        <div style={{ margin: 'auto' }}>
          <div>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={4}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Googlemaps;
