/* eslint-disable no-undef */
import env from 'react-dotenv';
import GoogleMapReact from 'google-map-react';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  InfoWindow,
} from '@react-google-maps/api';
import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';
// import inspector from '/assets/policeman.png';
const locations = [
  { name: 'Rabin Square', position: { lat: 32.0808, lng: 34.78 } },
  { name: 'HaTachana', position: { lat: 32.0609, lng: 34.771 } },
  { name: 'Sarona Market', position: { lat: 32.0706, lng: 34.7884 } },
  { name: 'Jaffa Port', position: { lat: 32.052, lng: 34.7542 } },
  { name: 'Azrieli Center', position: { lat: 32.0834, lng: 34.7931 } },
  { name: 'cyber', position: { lat: 32.0872801, lng: 34.8040903 } },
];

export default function MapsWidget() {
  const markerRef = useRef();
  const mapRef = useRef();
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  const center = { lat: 32.0872401, lng: 34.8041696 };
  const position = { lat: 32.0872401, lng: 34.8041696 };
  const containerStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    borderRadius: '10px',
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: env.GOOGLE_MAPS_APIKEY,
    libraries: ['places'],
  });
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!

    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // animate

  return (
    <Flex position="relative" flexDirection="column" alignItems="center">
      <Box h="90vh" w="100%">
        {isLoaded ? (
          <GoogleMap
            ref={mapRef}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}>
            {locations.map((inspector, i) => (
              <Marker
                key={inspector.name}
                ref={markerRef}
                position={inspector.position}
                clickable
                icon={{
                  url: '/assets/policeman.png',
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
                title={inspector.name}
              />
            ))}
            <Marker
              clickable
              position={position}
              icon={{
                url: '/assets/policeman.png',
                scaledSize: new window.google.maps.Size(30, 30),
              }}

              // eslint-disable-next-line no-undef
            />
            {/* Child components, such as markers, info windows, etc. */}

            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="1"></Box>
    </Flex>
  );
}
