import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../../../Context/StepContext";
const Step3 = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField
          label="Transport Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
          value={userData["transportName"]}
          onChange={(e) =>
            setUserData({ ...userData, transportName: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Mode Of Transport"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
          value={userData["transportType"]}
          onChange={(e) =>
            setUserData({ ...userData, transportType: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Estimated Transport Time"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
          value={userData["transportEstimatedTravelTime"]}
          onChange={(e) =>
            setUserData({
              ...userData,
              transportEstimatedTravelTime: e.target.value,
            })
          }
        />
      </div>
      <div>
        <TextField
          label="Transport Description"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          value={userData["transportdescription"]}
          onChange={(e) =>
            setUserData({ ...userData, transportdescription: e.target.value })
          }
        />
      </div>

      <div>
        <Button
          variant="contained"
          onClick={() => setCurrentStep(2)}
          color="secondary"
        >
          Back
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(4)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3;
