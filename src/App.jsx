import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { css } from "styled-components";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import { ViewportProvider } from "./Utils/Viewport";
function App() {
  const handleWindowResize = () => {
    window.location.reload();
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="App">
      <ViewportProvider>
        <Nav></Nav>
        <Home></Home>
      </ViewportProvider>
    </div>
  );
}

export default App;
