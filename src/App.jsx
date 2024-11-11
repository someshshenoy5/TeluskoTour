import { useState } from "react";
import "./App.css";
// import MultiStepForm from "./components/MultiStepForm/MultiStepForm/";
import AddTour from "./components/MultiStepForm/AddTour";
import StepContext from "./Context/StepContext";
import Home from "./components/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Pages/Navbar";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/AddTour"
            element={
              <StepContext>
                <AddTour />
              </StepContext>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
