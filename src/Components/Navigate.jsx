import React, { useState, useEffect } from "react";
import mapImage from "../images/Map.png";
import Car from "../images/Car.png";
import Bike from "../images/Bike.png";
import Train from "../images/Train.png";
import Bus from "../images/Bus.png";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowLeft,
  faLocationArrow,
  faCompass,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  InputField,
  StyledForm,
  SubmitButton,
} from "./StyledComponents/StyledComp";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useParams } from "react-router";
import {
  getSurroundingLocationFromCoords as getSurroundingLocationFromCoords,
  useGPS,
} from "../Utils/GPSProvider";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
// import L from "leaflet";

// import icon from "../images/marker-icon.png";
// import iconShadow from "../images/marker-shadow.png";
import { getCoordsFromLocation } from "./../Utils/GPSProvider";
import { Link } from "react-router-dom";

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
// });

// L.Marker.prototype.options.icon = DefaultIcon;
// console.log(L.Marker.prototype.options.icon);
// L.Icon.Default.imagePath = "../images/";
// console.log(L.Icon.Default.imagePath);

const navigateSchema = Yup.object().shape({
  from: Yup.string().required("Enter Your Location"),
  to: Yup.string().required("Enter Destination"),
});

const NavigateForm = styled(StyledForm)`
  width: 90%;
  background: #efefef;
  border-radius: 10px;
`;
const NavigateInput = styled(InputField)`
  background: #ffffff;
  border-radius: 4px;
  padding-left: 5px;
  border: 0px;
  margin-top: 15px;
`;

const Navigate = () => {
  const { ride } = useParams();
  const [GPSPosition, setGPSPostion] = useGPS();
  const [showOffers, setshowOffers] = useState(false);
  const [NavigationData, setNavigationData] = useState({ from: "", to: "" });
  const [showForm, setshowForm] = useState(true);
  const [defaultTO, setdefaultTO] = useState("");
  const [surroundingLocations, setSurroundingLocations] = useState([]);
  const [probableDestinations, setProbableDestinations] = useState([]);
  const [showTo, setshowTo] = useState(false);
  function handleNavigationSubmit(values) {
    const { from, to } = values;
    setNavigationData({ from, to });
    if (NavigationData.from != from) {
      getCoordsFromLocation(from)
        .then((coords) => {
          setGPSPostion(coords);
        })
        .catch((err) => console.log(err));
      console.log("searched");
    }

    setshowOffers(true);
    setshowForm(false);
  }
  function handleSwitch() {
    setshowOffers(false);
    setshowForm(true);
  }
  function handleNearLocationClick(location) {
    setGPSPostion(location.geometry.coordinates.reverse());
  }
  function handleNearDestinationClick(location) {
    setdefaultTO(location.properties.label);
  }
  const images = {
    Car: Car,
    Bike: Bike,
    Train: Train,
    Bus: Bus,
  };
  useEffect(() => {
    getSurroundingLocationFromCoords(GPSPosition[1], GPSPosition[0]).then(
      (data) => {
        console.log("response", data);
        setSurroundingLocations(data);
      }
    );
    return () => {};
  }, [GPSPosition]);

  useEffect(() => {
    if (surroundingLocations.length > 0) {
      let locationText =
        surroundingLocations?.[0].properties.county +
        "," +
        surroundingLocations?.[0].properties.country;
      getCoordsFromLocation(locationText)
        .then((coords) => {
          getSurroundingLocationFromCoords(coords[1], coords[0]).then(
            (data) => {
              setProbableDestinations(data);
            }
          );
          return () => {};
        })
        .catch((err) => console.log(err));
    }
  }, [surroundingLocations]);

  return (
    <div className="Container">
      <div className="navigate">
        <div className="inLocation">
          {showForm && (
            <Formik
              validationSchema={navigateSchema}
              enableReinitialize
              initialValues={{
                from: surroundingLocations[0]?.properties.label || "",
                to: defaultTO || "",
              }}
              onSubmit={(values) => {
                handleNavigationSubmit(values);
              }}
            >
              <NavigateForm className="form" as={Form} method="POST">
                <h4 style={{ textAlign: "left", marginBottom: "20px" }}>
                  Navigate by {ride}
                </h4>

                <NavigateInput
                  as={Field}
                  name="from"
                  list="locations"
                  placeholder={
                    surroundingLocations[0]?.properties.label || "From"
                  }
                  onFocus={() => setshowTo(false)}
                ></NavigateInput>
                <ErrorMessage
                  component="div"
                  name="from"
                  className="errmsg"
                ></ErrorMessage>
                <NavigateInput
                  as={Field}
                  name="to"
                  list="destinations"
                  placeholder={defaultTO || "To"}
                  onFocus={() => setshowTo(true)}
                ></NavigateInput>
                <ErrorMessage
                  component="div"
                  name="to"
                  className="errmsg"
                ></ErrorMessage>

                <SubmitButton type="submit" as="button">
                  Search
                </SubmitButton>
              </NavigateForm>
            </Formik>
          )}
          {showOffers && (
            <div className="ride-options">
              <div className="fromto">
                <h3>{showOffers && NavigationData.from}</h3>
                <h3>{NavigationData.to}</h3>
              </div>
              <div className="offers">
                <Link to="/ride">
                  <div className="offer">
                    <div className="ride">
                      <img src={images[ride]} alt="" />
                    </div>
                    <div className="persons">
                      {ride} <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> 4
                    </div>
                    <div className="price">$67</div>
                  </div>
                </Link>
                <div className="offer">
                  <div className="ride">
                    <img src={images[ride]} alt="" />
                  </div>
                  <div className="persons">
                    {ride} <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> 4
                  </div>
                  <div className="price">$67</div>
                </div>
                <div className="offer">
                  <div className="ride">
                    <img src={images[ride]} alt="" />
                  </div>
                  <div className="persons">
                    {ride} <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> 4
                  </div>
                  <div className="price">$67</div>
                </div>
              </div>
              <SubmitButton
                type="submit"
                as="button"
                style={{ marginTop: "20px" }}
                onClick={() => {
                  handleSwitch();
                }}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ marginRight: "10px" }}
                ></FontAwesomeIcon>
                Search again
              </SubmitButton>
            </div>
          )}
          {showTo && showForm ? (
            <ul className="locationSuggestion">
              <div className="title">
                <h4>
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    style={{ marginRight: "10px" }}
                  ></FontAwesomeIcon>
                  Where to go?
                </h4>
              </div>
              {probableDestinations.map((location) => {
                let coord = location.geometry.coordinates.reverse().join(",");
                return (
                  <li
                    onClick={() => {
                      handleNearDestinationClick(location);
                    }}
                    title={location.properties.label}
                    data--coords={coord}
                    key={coord + (Math.random() + Math.random()).toString()}
                  >
                    <span className="location">
                      {" "}
                      <FontAwesomeIcon
                        icon={faLocationArrow}
                        style={{ marginRight: "10px" }}
                      ></FontAwesomeIcon>
                      {location.properties.name.substring(0, 30)}
                      {location.properties.name.length > 30 && "..."}
                    </span>
                    {/* <span className="distance">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCompass}
                      style={{ marginRight: "10px" }}
                    ></FontAwesomeIcon>
                    {location.properties.distance * 1000}m
                  </span> */}
                  </li>
                );
              })}
            </ul>
          ) : (
            showForm && (
              <ul className="locationSuggestion">
                <div className="title">
                  <h4>
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={{ marginRight: "10px" }}
                    ></FontAwesomeIcon>
                    Where are you?
                  </h4>
                </div>
                {surroundingLocations.map((location) => {
                  let coord = location.geometry.coordinates.reverse().join(",");
                  return (
                    <li
                      onClick={() => {
                        handleNearLocationClick(location);
                      }}
                      title={location.properties.label}
                      data--coords={coord}
                      key={coord + (Math.random() + Math.random()).toString()}
                    >
                      <span className="location">
                        {" "}
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          style={{ marginRight: "10px" }}
                        ></FontAwesomeIcon>
                        {location.properties.name.substring(0, 30)}
                        {location.properties.name.length > 30 && "..."}
                      </span>
                      <span className="distance">
                        {" "}
                        <FontAwesomeIcon
                          icon={faCompass}
                          style={{ marginRight: "10px" }}
                        ></FontAwesomeIcon>
                        {location.properties.distance * 1000}m
                      </span>
                    </li>
                  );
                })}
              </ul>
            )
          )}

          <datalist id="locations">
            {surroundingLocations.slice(0, 4).map((location) => {
              let coord = location.geometry.coordinates.reverse().join(",");
              return (
                <option
                  value={location.properties.label}
                  data--coords={coord}
                  key={coord + Math.random().toString()}
                />
              );
            })}
          </datalist>
          <datalist id="destinations">
            {probableDestinations.slice(0, 4).map((location) => {
              let coord = location.geometry.coordinates.reverse().join(",");
              return (
                <option
                  value={location.properties.label}
                  data--coords={coord}
                  key={coord + Math.random().toString()}
                />
              );
            })}
          </datalist>
        </div>
        <div className="outmap">
          <div className="mapContainer">
            <div>
              {GPSPosition && (
                <div>
                  <MapContainer
                    key={GPSPosition.join(Math.random().toString())}
                    className="leaflet-container"
                    center={GPSPosition || [23.7488288, 90.4311135]}
                    zoom={16}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={GPSPosition || [23.7488288, 90.4311135]}>
                      <Popup>Your Location</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              )}
            </div>

            {/* <img src={mapImage} alt="" /> */}
          </div>
          <h5>{GPSPosition.join(",")}</h5>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
