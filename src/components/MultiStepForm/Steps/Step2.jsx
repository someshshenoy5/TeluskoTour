// src/components/MultiStepForm/steps/Step2.js
import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../../../Context/StepContext";
import Grid from "@mui/material/Grid2";

const Step2 = ({ formData, setFormData }) => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <TextField
            label="Lodging Name"
            margin="normal"
            variant="outlined"
            color="secondary"
            fullWidth
            value={userData["lodgingName"]}
            onChange={(e) =>
              setUserData({ ...userData, lodgingName: e.target.value })
            }
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Lodging Type"
            margin="normal"
            variant="outlined"
            color="secondary"
            fullWidth
            value={userData["lodgingType"]}
            onChange={(e) =>
              setUserData({ ...userData, lodgingType: e.target.value })
            }
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Description"
            margin="normal"
            variant="outlined"
            color="secondary"
            multiline
            fullWidth
            rows={4}
            value={userData["lodgingDescription"]}
            onChange={(e) =>
              setUserData({ ...userData, lodgingDescription: e.target.value })
            }
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Address"
            margin="normal"
            variant="outlined"
            color="secondary"
            multiline
            fullWidth
            rows={4}
            value={userData["lodgingAddress"]}
            onChange={(e) =>
              setUserData({ ...userData, lodgingAddress: e.target.value })
            }
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Lodge Rating Out of 5"
            margin="normal"
            variant="outlined"
            color="secondary"
            type="number"
            value={userData["lodgingRating"]}
            onChange={(e) =>
              setUserData({
                ...userData,
                lodgingRating: parseInt(e.target.value),
              })
            }
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        onClick={() => setCurrentStep(1)}
        color="secondary"
      >
        Back
      </Button>
      <span> </span>
      <Button
        variant="contained"
        onClick={() => setCurrentStep(3)}
        color="primary"
      >
        Next
      </Button>
    </div>
  );
};

export default Step2;
