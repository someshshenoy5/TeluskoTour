import React, { useContext, useState } from "react";
import { Button, TextField, Input } from "@mui/material";
import { multiStepContext } from "../../../Context/StepContext";
import Grid from "@mui/material/Grid2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
// import { InputAdornment } from "@mui/material";

const Step4 = () => {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImageChange1 = (e) => {
    setImage1(e.target.files);
  };
  const handleImageChange2 = (e) => {
    setImage2(e.target.files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitData(e, image1, image2);
    } catch (error) {
      console.error("Error submitting data:", error);
    }

    // const VisuallyHiddenInput = styled("input")({
    //   clip: "rect(0 0 0 0)",
    //   clipPath: "inset(50%)",
    //   height: 1,
    //   overflow: "hidden",
    //   position: "absolute",
    //   bottom: 0,
    //   left: 0,
    //   whiteSpace: "nowrap",
    //   width: 1,
    // });
  };
  return (
    <Grid>
      <Grid container columns={20} spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Tour Name"
            margin="normal"
            variant="outlined"
            color="secondary"
            fullWidth
            value={userData["tourName"]}
            onChange={(e) =>
              setUserData({ ...userData, tourName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Tour Guide"
            margin="normal"
            variant="outlined"
            color="secondary"
            fullWidth
            value={userData["tourGuide"]}
            onChange={(e) =>
              setUserData({ ...userData, tourGuide: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Start Date"
            margin="normal"
            variant="outlined"
            color="secondary"
            type="date"
            fullWidth
            value={userData["startDate"]}
            onChange={(e) =>
              setUserData({ ...userData, startDate: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="End Date"
            margin="normal"
            variant="outlined"
            color="secondary"
            type="date"
            fullWidth
            value={userData["endDate"]}
            onChange={(e) =>
              setUserData({ ...userData, endDate: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Ticket Available"
            margin="normal"
            r
            variant="outlined"
            color="secondary"
            type="number"
            fullWidth
            value={userData["ticketsAvailable"]}
            onChange={(e) =>
              setUserData({
                ...userData,
                ticketsAvailable: parseInt(e.target.value),
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Price in Rupee"
            margin="normal"
            variant="outlined"
            color="secondary"
            type="number"
            fullWidth
            value={userData["price"]}
            onChange={(e) =>
              setUserData({ ...userData, price: parseInt(e.target.value) })
            }
          />
          {/* <TextField
          placeholder="Price"
          type="number"
          value={userData["price"]}
          onChange={(e) => setUserData({ ...userData, price: e.target.value })}
          startAdornment={<InputAdornment position="start">₹</InputAdornment>}
        /> */}
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            label="Tour Images"
            margin="normal"
            variant="outlined"
            color="secondary"
            fullWidth
            value={userData["tourImages"].join(", ")}
            onChange={(e) =>
              setUserData({
                ...userData,
                tourImages: e.target.value.split(","),
              })
            }
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload Tour Images
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <input
            type="file"
            onChange={handleImageChange1}
            accept="image/*"
            multiple
            style={{ display: "block", marginTop: "16px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            type="file"
            onChange={handleImageChange2}
            accept="image/*"
            multiple
            style={{ display: "block", marginTop: "16px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} size={25}>
          <TextField
            label="Tour Description"
            margin="normal"
            variant="outlined"
            color="secondary"
            multiline
            rows={3}
            fullWidth
            value={userData["tourDescription"]}
            onChange={(e) =>
              setUserData({ ...userData, tourDescription: e.target.value })
            }
          />
        </Grid>
        {/* <Grid item xs={12} sm={6} size={8}>
            <TextField
              label="Meals"
              margin="normal"
              variant="outlined"
              color="secondary"
              multiline
              rows={4}
              fullWidth
              value={userData["meals"]}
              onChange={(e) =>
                setUserData({ ...userData, meals: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} size={8}>
            <TextField
              label="Activities"
              margin="normal"
              variant="outlined"
              color="secondary"
              multiline
              rows={4}
              fullWidth
            
              value={userData["activities"]}
              onChange={(e) =>
                setUserData({ ...userData, activities: e.target.value })
              }
            />
          </Grid> */}
        <TextField
          label="Meals (comma-separated)"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
          value={userData["meals"].join(", ")}
          onChange={(e) =>
            setUserData({ ...userData, meals: e.target.value.split(",") })
          }
        />
        <TextField
          label="Activities (comma-separated)"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
          value={userData["activities"].join(", ")}
          onChange={(e) =>
            setUserData({ ...userData, activities: e.target.value.split(",") })
          }
        />
        {/* <TextField
          label="Tour Images (comma-separated URLs)"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
          value={userData["tourImages"].join(", ")}
          onChange={(e) =>
            setUserData({ ...userData, tourImages: e.target.value.split(",") })
          }
        /> */}
      </Grid>

      <Grid item xs={12}>
        <div className="d-flex justify-content-center mt-3">
          <Button
            variant="contained"
            onClick={() => setCurrentStep(3)}
            color="secondary"
          >
            Back
          </Button>
          <span> </span>
          <Button variant="contained" onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Step4;
