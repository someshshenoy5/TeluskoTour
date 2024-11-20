
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./TourDetailPage.css";

const TourDetailPage = () => {
  const location = useLocation();
  const { tour } = location.state || {};

  const [editingSections, setEditingSections] = useState({
    tour: false,
    location: false,
    lodging: false,
    transport: false,
  });

  const [updatedTour, setUpdatedTour] = useState(tour);
  

  // const handleEdit = (field, value) => {
  //   setUpdatedTour({ ...updatedTour, [field]: value });
  // };
 
  const handleEdit = (field, value) => {
    console.log(`Editing field: ${field}, New Value: ${value}`);
    setUpdatedTour(prevTour => ({
      ...prevTour,
      [field]: value,
    }));
    console.log('Updated Tour:', updatedTour);
  };

  const toggleEdit = (section) => {
    setEditingSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  // const handleEdit = (field, value) => {
  //   setUpdatedTour((prevTour) => ({
  //     ...prevTour,
  //     location: {
  //       ...prevTour.location,
  //       [field]: value,
  //     },
  //   }));
  // };

  // const handleSave = async (section) => {
  //   console.log("Location data:", updatedTour.location);

  //   try {
  //     const endpoint =
  //       section === "tour"
  //         ? `http://localhost:8080/api/tours/${updatedTour.id}`
  //         : `http://localhost:8080/${section}s/${updatedTour.location.id}`;

  //     const dataToUpdate =
  //       section === "tour" ? updatedTour : updatedTour[section];

  //     await axios.put(endpoint, dataToUpdate);
  //     toggleEdit(section);
  //   } catch (error) {
  //     console.log(`updated ${section}:`, dataToUpdate);
  //     console.error(`Error updating ${section}:`, error);
  //   }
  // };

  const handleSave = async (section) => {
    let endpoint;
    let dataToUpdate;
  
    try {
      // Determine the endpoint and the data to update based on the section
      if (section === 'tour') {
        endpoint = `http://localhost:8080/api/tours/${updatedTour.id}`;
        dataToUpdate = updatedTour; 
      } 
      else {
        
        endpoint = `http://localhost:8080/${section}s/${updatedTour[section].id}`;
        dataToUpdate = updatedTour[section]; // Update the specific section
      }

      // Make the PUT request to update the data
      await axios.put(endpoint, dataToUpdate);
      toggleEdit(section); 
    } catch (error) {
      // console.error(`Error updating ${section}:`, error);
      
    }
  };

  if (!tour) {
    return <div className="no-tour">No tour data available.</div>;
  }

  return (
    <div className="tour-detail">
      {/* Header Section */}
      <div className="tour-header">
        <div className="header-content">
          <div className="title-container">
            {editingSections.tour ? (
              <div>
                <input
                  type="text"
                  className="title-input"
                  value={updatedTour.tourName}
                  onChange={(e) => handleEdit("tourName", e.target.value)}
                />
                <input
                  type="date"
                  className="description-input"
                  value={updatedTour.startDate}
                  onChange={(e) => handleEdit("startDate", e.target.value)}
                />
                <input
                  type="date"
                  className="description-input"
                  value={updatedTour.endDate}
                  onChange={(e) => handleEdit("endDate", e.target.value)}
                />
              </div>
            ) : (
              <div>
                <h1>{updatedTour.tourName}</h1>

                <h2>
                  {updatedTour.startDate} to {updatedTour.endDate}
                </h2>
              </div>
            )}
            <button className="edit-button" onClick={() => toggleEdit("tour")}>
              {editingSections.tour ? "💾" : "✎"}
            </button>
          </div>
          {editingSections.tour ? (
            <textarea
              className="description-input"
              value={updatedTour.tourDescription}
              onChange={(e) => handleEdit("tourDescription", e.target.value)}
            />
          ) : (
            <p>{updatedTour.tourDescription}</p>
          )}
          {editingSections.tour && (
            <button className="save-button" onClick={() => handleSave("tour")}>
              Save Changes
            </button>
          )}
        </div>
      </div>

      <div className="details-grid">
        {/* Display Tour Guide */}
        <div className="detail-card">
          <div className="card-header">
            <h3>Tour Guide</h3>
          </div>
          <div className="card-content">
            <p>{updatedTour.tourGuide}</p>
          </div>
        </div>

        {/* Display Price */}
        <div className="detail-card">
          <div className="card-header">
            <h3>Price</h3>
          </div>
          <div className="card-content">
            <p>${updatedTour.price}</p>
          </div>
        </div>

        {/* Display Tickets Available */}
        <div className="detail-card">
          <div className="card-header">
            <h3>Tickets Available</h3>
          </div>
          <div className="card-content">
            <p>{updatedTour.ticketsAvailable} tickets left</p>
          </div>
        </div>

        {/* Display Meals */}
        <div className="detail-card">
          <div className="card-header">
            <h3>Meals Included</h3>
          </div>
          <div className="card-content">
            <ul>
              {updatedTour.meals.map((meal, index) => (
                <li key={index}>{meal}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Display Activities */}
        <div className="detail-card">
          <div className="card-header">
            <h3>Activities</h3>
          </div>
          <div className="card-content">
            <ul>
              {updatedTour.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Display Tour Images */}
        <div className="detail-card">
          <div className="card-header">
            <h3>Tour Images</h3>
          </div>
          <div className="card-content">
            <div className="image-gallery">
              {updatedTour.tourImages.map((image, index) => (
                <img key={index} src={image} alt={`Tour Image ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="detail-card">
          <div className="card-header">
            <h3>Location</h3>
            <button
              className="edit-button"
              onClick={() => toggleEdit("location")}
            >
              {editingSections.location ? "💾" : "✎"}
            </button>
          </div>
          <div className="card-content">
            <div className="field-group">
              <label>Country:</label>
              {editingSections.location ? (
                <input
                  type="text"
                  value={updatedTour.location.country}
                  onChange={(e) =>
                    handleEdit("location", {
                      ...updatedTour.country,
                      country: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.location.country}</p>
              )}
            </div>
            <div className="field-group">
              <label>From:</label>
              {editingSections.location ? (
                <input
                  type="text"
                  value={updatedTour.location.fromLocation}
                  onChange={(e) =>
                    handleEdit("location", {
                      ...updatedTour.location,
                      fromLocation: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.location.fromLocation}</p>
              )}
            </div>
            <div className="field-group">
              <label>To:</label>
              {editingSections.location ? (
                <input
                  type="text"
                  value={updatedTour.location.toLocation}
                  onChange={(e) =>
                    handleEdit("location", {
                      ...updatedTour.location,
                      toLocation: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.location.toLocation}</p>
              )}
            </div>

            <div className="field-group">
              <label>Total Distance:</label>
              {editingSections.location ? (
                <input
                  type="number"
                  value={updatedTour.location.distance}
                  onChange={(e) =>
                    handleEdit("location", {
                      ...updatedTour.distance,
                      distance: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.location.distance} km</p>
              )}
            </div>
            <div className="field-group">
              <label>Travel Time:</label>
              {editingSections.location ? (
                <input
                  type="text"
                  value={updatedTour.location.estimatedTravelTime}
                  onChange={(e) =>
                    handleEdit("location", {
                      ...updatedTour.estimatedTravelTime,
                      estimatedTravelTime: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.location.estimatedTravelTime}</p>
              )}
            </div>
            <div className="field-group">
              <label>Description:</label>
              {editingSections.location ? (
                <input
                  type="text"
                  value={updatedTour.location.locationDescription}
                  onChange={(e) =>
                    handleEdit("location", {
                      ...updatedTour.locationDescription,
                      locationDescription: e.target.value,
                    })
                  }
                />
              ) : (
                <p className="description">
                  {updatedTour.location.locationDescription}
                </p>
              )}
            </div>
            {editingSections.location && (
              <button
                className="save-button"
                onClick={() => handleSave("location")}
              >
                Save Location
              </button>
            )}
          </div>
        </div>

        {/* Lodging Card */}
        <div className="detail-card">
          <div className="card-header">
            <h3>Accommodation</h3>
            <button
              className="edit-button"
              onClick={() => toggleEdit("lodging")}
            >
              {editingSections.lodging ? "💾" : "✎"}
            </button>
          </div>
          <div className="card-content">
            <div className="field-group">
              <label>Lodging Name:</label>
              {editingSections.lodging ? (
                <input
                  type="text"
                  className="lodging-name"
                  value={updatedTour.lodging.lodgingName}
                  onChange={(e) =>
                    handleEdit("lodging", {
                      ...updatedTour.lodging,
                      lodgingName: e.target.value,
                    })
                  }
                />
              ) : (
                <h4>{updatedTour.lodging.lodgingName}</h4>
              )}
            </div>
            <div className="field-group">
              <label>Lodging Type:</label>
              {editingSections.lodging ? (
                <input
                  type="text"
                  value={updatedTour.lodging.lodgingType}
                  onChange={(e) =>
                    handleEdit("lodging", {
                      ...updatedTour.lodging,
                      lodgingType: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.lodging.lodgingType}</p>
              )}
            </div>
            <div className="field-group">
              <label>Address:</label>
              {editingSections.lodging ? (
                <input
                  type="text"
                  value={updatedTour.lodging.address}
                  onChange={(e) =>
                    handleEdit("lodging", {
                      ...updatedTour.lodging,
                      address: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.lodging.address}</p>
              )}
            </div>
            <div className="rating">{updatedTour.lodging.rating}/5</div>

            <div className="field-group">
              <label>Description:</label>
              {editingSections.lodging ? (
                <input
                  type="text"
                  value={updatedTour.lodging.lodgingDescription}
                  onChange={(e) =>
                    handleEdit("lodging", {
                      ...updatedTour.lodging,
                      lodgingDescription: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.lodging.lodgingDescription}</p>
              )}
            </div>
            {editingSections.lodging && (
              <button
                className="save-button"
                onClick={() => handleSave("lodging")}
              >
                Save Lodging
              </button>
            )}
          </div>
        </div>

        {/* Transport Card */}
        <div className="detail-card">
          <div className="card-header">
            <h3>Transport</h3>
            <button
              className="edit-button"
              onClick={() => toggleEdit("transport")}
            >
              {editingSections.transport ? "💾" : "✎"}
            </button>
          </div>
          <div className="card-content">
            <div className="field-group">
              <label> Transport Name:</label>
              {editingSections.transport ? (
                <input
                  type="text"
                  className="transport-name"
                  value={updatedTour.transport.transportName}
                  onChange={(e) =>
                    handleEdit("transport", {
                      ...updatedTour.transport,
                      transportName: e.target.value,
                    })
                  }
                />
              ) : (
                <h4>{updatedTour.transport.transportName}</h4>
              )}
            </div>
            <div className="field-group">
              <label>Travel Type:</label>
              {editingSections.transport ? (
                <input
                  type="text"
                  value={updatedTour.transport.transportType}
                  onChange={(e) =>
                    handleEdit("transport", {
                      ...updatedTour.transport,
                      transportType: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.transport.transportType}</p>
              )}
            </div>
            <div className="field-group">
              <label>Est. Travel Time:</label>
              {editingSections.transport ? (
                <input
                  type="text"
                  value={updatedTour.transport.estimatedTravelTime}
                  onChange={(e) =>
                    handleEdit("transport", {
                      ...updatedTour.transport,
                      estimatedTravelTime: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{updatedTour.transport.estimatedTravelTime}</p>
              )}
            </div>
            <div className="field-group">
              <label>Description:</label>
              {editingSections.transport ? (
                <input
                  type="text"
                  value={updatedTour.transport.transportDescription}
                  onChange={(e) =>
                    handleEdit("transport", {
                      ...updatedTour.transport,
                      transportDescription: e.target.value,
                    })
                  }
                />
              ) : (
                <p className="description">
                  {updatedTour.transport.transportDescription}
                </p>
              )}
            </div>

            {editingSections.transport && (
              <button
                className="save-button"
                onClick={() => handleSave("transport")}
              >
                Save Transport
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
