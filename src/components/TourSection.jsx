import React, { useState } from "react";
import EditableInput from "./EditableInput";

const TourSection = ({ title, data, onEdit, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="detail-card">
      <div className="card-header">
        <h3>{title}</h3>
        <button className="edit-button" onClick={toggleEdit}>
          {isEditing ? "💾" : "✏️"}
        </button>
      </div>
      {isEditing ? (
        <EditableInput 
          value={JSON.stringify(data)} 
          onChange={(value) => onEdit(title.toLowerCase(), JSON.parse(value))} 
          type="object"
        />
      ) : (
        <p>{JSON.stringify(data)}</p>
      )}
      {isEditing && (
        <button className="save-button" onClick={() => onSave(title.toLowerCase())}>
          Save Changes
        </button>
      )}
    </div>
  );
};

export default TourSection;