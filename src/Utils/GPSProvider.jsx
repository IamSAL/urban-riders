import React, { createContext, useContext, useState, useEffect } from "react";
import { apiKeyOpenRouteService } from "./map.config";

export const GPSContext = createContext();
export const defaultLocation = [23.7488288, 90.4311135];

export const getCoordsFromLocation = (LocationText) => {
  return fetch(
    `https://api.openrouteservice.org/geocode/autocomplete?api_key=${apiKeyOpenRouteService}&text=${encodeURIComponent(
      LocationText
    )}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.features.length == 0) {
        throw new Error("No location found");
      } else {
        return data.features[0].geometry.coordinates.reverse();
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const getSurroundingLocationFromCoords = (long, latt) => {
  return fetch(
    `https://api.openrouteservice.org/geocode/reverse?api_key=${apiKeyOpenRouteService}&point.lon=${long}&point.lat=${latt}&&boundary.circle.radius=10&size=100`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.features.length == 0) {
        throw new Error("No location found");
      } else {
        return data.features;
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const GPSProvider = ({ children }) => {
  const [GPSPostion, setGPSPostion] = useState(defaultLocation);
  const successHandler = (position) => {
    console.log(position.coords);
    let { latitude, longitude } = position.coords;
    setGPSPostion([23.7488288, 90.4311135]);
    setGPSPostion([latitude, longitude]);
  };
  const failureHandler = (err) => {
    console.log(err);
  };
  const options = {
    enableHighAccuracy: true,
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            window.navigator.geolocation.getCurrentPosition(
              successHandler,
              failureHandler,
              options
            );
          } else if (result.state === "prompt") {
            window.navigator.geolocation.getCurrentPosition(
              successHandler,
              failureHandler,
              options
            );
          } else if (result.state === "denied") {
            console.log("Please allow location from settings");
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }

    return () => {};
  }, []);

  return (
    <GPSContext.Provider value={[GPSPostion, setGPSPostion]}>
      {children}
    </GPSContext.Provider>
  );
};

export const useGPS = () => {
  const [GPSPostion, setGPSPostion] = useContext(GPSContext);
  return [GPSPostion, setGPSPostion];
};
