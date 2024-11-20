import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../../../Context/StepContext";
const Step1 = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField
          label="Pickup Location"
          margin="normal"
          variant="outlined"
          color="secondary"
          Input={{
            style: {
              color: 'white',
            },
          }}
          fullWidth
          value={userData["fromLocation"]}
          onChange={(e) =>
            setUserData({ ...userData, fromLocation: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Drop Location"
          margin="normal"
          variant="outlined"
          color="secondary"
          
          fullWidth
          value={userData["toLocation"]}
          onChange={(e) =>
            setUserData({ ...userData, toLocation: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
          
          fullWidth
          value={userData["country"]}
          onChange={(e) =>
            setUserData({ ...userData, country: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Total Distance"
          margin="normal"
          variant="outlined"
          color="secondary"
          type="number"
          fullWidth
          value={userData["distance"]}
          onChange={(e) =>
            setUserData({ ...userData, distance: parseInt(e.target.value) })
          }
        />
      </div>
      <div>
        <TextField
          label="Trip Description"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
          value={userData["locationDescription"]}
          onChange={(e) =>
            setUserData({ ...userData, locationDescription: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Estimated Time to travel"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
          value={userData["estimatedTravelTime"]}
          onChange={(e) =>
            setUserData({ ...userData, estimatedTravelTime: e.target.value })
          }
        />
      </div>
      <div className="StepButton">
        <Button
          variant="contained"
          size="large"
          onClick={() => setCurrentStep(2)}
          color="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step1;
