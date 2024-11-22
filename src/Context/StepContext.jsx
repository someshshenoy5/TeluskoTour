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
    country: "",
    price: 0,
    ticketsAvailable: 0,
    meals: [],
    activities: [],
    tourImages: [],
    fromLocation: "",
    locationDescription: "",
    toLocation: "",
    distance: 0,
    transportdescription: "",
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
  

  const submitData = async (e,image1,image2) => {
    e.preventDefault();
    console.log(image1,image2);

  
    try {
      // First API: Post location data
      const locationData = {
        fromLocation: userData.fromLocation,
        toLocation: userData.toLocation,
        distance: userData.distance,
        locationDescription: userData.locationDescription,
        estimatedTravelTime: userData.estimatedTravelTime,
        country: userData.country
      };
      const locationResponse = await axios.post("http://localhost:8080/locations", locationData);
      console.log("Location Response:", locationResponse.data);
  
      // Second API: Post lodging data
      const lodgingData = {
        lodgingName: userData.lodgingName,
        lodgingType: userData.lodgingType,
        lodgingdescription: userData.lodgingDescription,
        address: userData.lodgingAddress,
        rating: userData.lodgingRating,
      };
      const lodgingResponse = await axios.post("http://localhost:8080/lodgings", lodgingData);
      console.log("Lodging Response:", lodgingResponse.data);
  
      // Third API: Post transport data
      const transportData = {
        transportName: userData.transportName,
        transportType: userData.transportType,
        estimatedTravelTime: userData.transportEstimatedTravelTime,
        transportdescription: userData.transportDescription,
      };
      const transportResponse = await axios.post("http://localhost:8080/transports", transportData);
      console.log("Transport Response:", transportResponse.data);
  
      // Fourth API: Post tour data
      const tourData = {
        tourName: userData.tourName,
        tourDescription: userData.tourDescription,
        tourGuide: userData.tourGuide,
        startDate: userData.startDate,
        endDate: userData.endDate,
        meals: userData.meals,
        activities: userData.activities,
        price: userData.price,
        ticketsAvailable: userData.ticketsAvailable,
      };
      const formData =new FormData();
      formData.append("tour", JSON.stringify(tourData));
      if (image1 && image1[0]) formData.append("image1", image1[0]);
      if (image2 && image2[0]) formData.append("image2", image2[0]);
      const tourResponse = await axios.post("http://localhost:8080/api/tours", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Tour Response:", tourResponse.data);
      // Reset form state after successful submission
      setCurrentStep(1);
      setUserData("");
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
