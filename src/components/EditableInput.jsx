import React from "react";

const EditableInput = ({ value, onChange, type = "text" }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input 
      type={type} 
      value={value} 
      onChange={handleChange} 
      className="editable-input"
    />
  );
};

export default EditableInput;