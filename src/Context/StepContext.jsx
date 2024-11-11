import React, { useState } from "react";
import AddTour from "../components/MultiStepForm/AddTour";
import axios from "axios";
export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    tourName: "",
    tourDescription: "",
    tourGuide: "",
    startDate: "",
    endDate: "",
    price: 0,
    ticketsAvailable: 0,
    meals: [],
    activities: [],
    tourImages: [],
    fromLocation: "",
    toLocation: "",
    distance: 0,
    locationDescription: "",
    estimatedTravelTime: "",
    lodgingName: "",
    lodgingType: "",
    lodgingDescription: "",
    lodgingAddress: "",
    lodgingRating: 0,
    transportName: "",
    transportType: "",
    transportEstimatedTravelTime: "",
    transportDescription: "",
  });
  const [finalData, setFinalData] = useState([]);

  const submitData = async (e) => {
    e.preventDefault();
    const finalTourData = {
      ...userData,
      // ,
      // meals: userData.meals.map((meal) => meal.toString()), // Convert each meal to string
      // activities: userData.activities.map((activity) => activity.toString()), // Convert each activity to string
      // tourImages: userData.tourImages.map((image) => image.toString()), // Convert each image
    };
    console.log("finaltourdata", finalTourData);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/tours",
        finalTourData
      );
      // console.log("response after post request", userData);
      console.log("Response:", response.data);
      setCurrentStep(1);
      setUserData({
        tourName: "",
        tourDescription: "",
        tourGuide: "",
        startDate: "",
        endDate: "",
        price: 0,
        ticketsAvailable: 0,
        meals: [],
        activities: [],
        tourImages: [],
        fromLocation: "",
        toLocation: "",
        distance: 0,
        locationDescription: "",
        estimatedTravelTime: "",
        lodgingName: "",
        lodgingType: "",
        lodgingDescription: "",
        lodgingAddress: "",
        lodgingRating: 0,
        transportName: "",
        transportType: "",
        transportEstimatedTravelTime: "",
        transportDescription: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <multiStepContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      <AddTour />
    </multiStepContext.Provider>
  );
};

export default StepContext;
