import React, { useState } from "react";
import EditableInput from "./EditableInput";

const TourHeader = ({ tour, onEdit, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="tour-header">
      <div className="header-content">
        <div className="title-container">
          {isEditing ? (
            <EditableInput 
              value={tour.tourName} 
              onChange={(value) => onEdit("tourName", value)} 
            />
          ) : (
            <h1>{tour.tourName}</h1>
          )}
          <button className="edit-button" onClick={toggleEdit}>
            {isEditing ? "💾" : "✏️"}
          </button>
        </div>
        {isEditing && (
          <div>
            <EditableInput 
              value={tour.startDate} 
              onChange={(value) => onEdit("startDate", value)} 
              type="date"
            />
            <EditableInput 
              value={tour.endDate} 
              onChange={(value) => onEdit("endDate", value)} 
              type="date"
            />
            <button className="save-button" onClick={onSave}>
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourHeader;