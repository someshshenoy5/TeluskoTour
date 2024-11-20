import { useState } from "react";
import "./App.css";
// import MultiStepForm from "./components/MultiStepForm/MultiStepForm/";
import AddTour from "./components/MultiStepForm/AddTour";
import StepContext from "./Context/StepContext";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import TourPage from "./Pages/TourDetailPage";
// import BookTourPage from "./Pages/BookTourPage";
// import TourDetails from "./Pages/TourDetailPage";
import TourDetailPage from "./Pages/TourDetailPage";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Navbar />
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
          <Route path="/TourDetail/:id" element={<TourDetailPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
