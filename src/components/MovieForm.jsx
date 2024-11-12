import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import "../style.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditRow from "./EditRow";
import AddForm from "./AddForm";

export default function MovieForm() {

  // State för en lista med alla filmer.
  const [movies, setMovies] = useState([]);
  // Skapa ett state för id för den film man editar.
  const [editingId, setEditingId] = useState(null);
  // State för att skapa ett objekt med titel år och betyg.
  const [addFormData, setAddFormData] = useState({
    title: "",
    year: "",
    grade: "",
  });

  // State för att skapa ett nytt objekt när man editar en film.
  const [editFormData, setEditFormData] = useState({
    title: "",
    year: "",
    grade: "",
  });

  // Funktion som updaterar input boxen varje gång man skriver något. Uppdaterar sen staten.
  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // Funktion som updaterar input boxen när man editar en film, uppdaterar sen edit staten.
  const handleFormEdit = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  // Funktion som skapar ett nytt objekt med input data. Lägger till filmen i listan och uppdaterar state.
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      id: nanoid(),
      title: addFormData.title,
      year: addFormData.year,
      grade: addFormData.grade,
    };

    const newMovies = [...movies, newMovie];
    setMovies(newMovies);

    setAddFormData({
      title: "",
      year: "",
      grade: "",
    });
  };

  // Ändrar datan när man editar en film.
  const handleEditClick = (e, movie) => {
    e.preventDefault();
    setEditingId(movie.id);

    const formValues = {
      title: movie.title,
      year: movie.year,
      grade: movie.grade,
    };

    setEditFormData(formValues);
  };

  // Hanterar att spara ändringar från edit i ett nytt state.
  const handleSaveClick = (e) => {
    e.preventDefault();

    const editedMovie = {
      id: editingId,
      title: editFormData.title,
      year: editFormData.year,
      grade: editFormData.grade,
    };

    const newMovies = [...movies];

    const index = movies.findIndex((movie) => movie.id === editingId);

    newMovies[index] = editedMovie;
    setMovies(newMovies);
    setEditingId(null);
  };

  // Tar bort en film från listan.
  const handleDeleteClick = (e, movie) => {
    e.preventDefault();
    const deleteId = movie.id;
    const newMovies = [...movies.filter(movie => movie.id !== deleteId)];
    setMovies(newMovies);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleEditClick}>
        <h2 className="head-line">Add a movie</h2>
        
        <table className="added-movies">
          <thead>

            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <React.Fragment key={movie.id}>
                {editingId === movie.id ? (
                  <EditRow
                    editFormData={editFormData}
                    handleFormEdit={handleFormEdit}
                    handleSaveClick={handleSaveClick}
                  />
                ) : (
                  <ReadOnlyRow
                    movie={movie}
                    handleEditClick={handleEditClick}
                    handleDeleteClick= {handleDeleteClick}
                  />
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <AddForm 
        handleAddFormChange={handleAddFormChange}
        handleAddFormSubmit={handleAddFormSubmit}
        addFormData={addFormData}
      />
      
      
    </div>
  );
}
