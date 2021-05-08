import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import styled, { css } from "styled-components";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import { ViewportProvider } from "./Utils/Viewport";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Navigate from "./Components/Navigate";
import { AuthProvider } from "./Utils/AuthProvider";
import PrivateRoute from "./Utils/PrivateRoute";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { GPSProvider } from "./Utils/GPSProvider";
import Ride from "./Components/Ride";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Nav></Nav>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <GPSProvider>
              <PrivateRoute path="/Navigate/:ride">
                <Navigate></Navigate>
              </PrivateRoute>
              <PrivateRoute path="/ride">
                <Ride></Ride>
              </PrivateRoute>
            </GPSProvider>
            <Route path="*">
              <h1>404</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
