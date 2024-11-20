import React, { useContext } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import { Stepper, StepLabel, Step, Box } from "@mui/material";
import { multiStepContext } from "../../Context/StepContext";

const AddTour = () => {
  const { currentStep, finalData } = useContext(multiStepContext);
  const activeStep =
    typeof currentStep === "number" ? Math.max(0, currentStep - 1) : 0;
  function ShowStep(step) {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
    }
  }
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          color: "wheat",
          padding: "1rem",
          background: "darkslategray",
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px #ccc",
          margin: "1rem",
          // padding: "2rem",
        }}
      >
        Welcome to Telusko Tour
      </h3>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          <Step>
            <StepLabel>Location Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Lodging Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Transport Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Tour Details</StepLabel>
          </Step>
        </Stepper>
      </Box>
      {ShowStep(currentStep)}
    </div>
  );
};

export default AddTour;
