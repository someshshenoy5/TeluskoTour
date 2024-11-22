import { useState } from "react";
import "./App.css";
// import MultiStepForm from "./components/MultiStepForm/MultiStepForm/";
import AddTour from "./components/MultiStepForm/AddTour";
import StepContext from "./Context/StepContext";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import TourPage from "./Pages/TourDetailPage";
import TourDetailPage from "./Pages/TourDetailPage";
import { AuthProvider } from "./Context/AuthContext"
import SignInPage from "./Pages/SignInPage";
import LoginPage from "./Pages/LoginPage";


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/AddTour"
              element={
                <StepContext>
                  <AddTour />
                </StepContext>
              }
            />
            <Route path="/TourDetail/:id" element={<TourDetailPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
