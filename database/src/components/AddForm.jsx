import React from "react";

export default function AddForm({ addFormData, handleAddFormSubmit, handleAddFormChange }) {
  return (
    <form className="movie-form" onSubmit={handleAddFormSubmit}>
      <input
        type="text"
        name="title"
        value={addFormData.title}
        required="required"
        placeholder="Enter a title..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="year"
        value={addFormData.year}
        required="required"
        placeholder="Enter a year..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="grade"
        value={addFormData.grade}
        required="required"
        placeholder="Enter a number from 1-5..."
        onChange={handleAddFormChange}
      />
      <button type="submit">Add movie</button>
    </form>
  );
}
