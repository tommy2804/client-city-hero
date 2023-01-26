import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCoords(position?.coords);
        });
      }
    };
    getLocation();
    return () => navigator.geolocation.clearWatch(getLocation);
  }, []);
  return coords;
};
