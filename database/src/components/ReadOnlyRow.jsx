import React from 'react'

export default function ReadOnlyRow( {movie, handleEditClick, handleDeleteClick} ) {
  return (
    <>
        <tr>
            <td className="title">{movie.title}</td>
            <td className="year">{movie.year}</td>
            <td className="grade">{movie.grade}/5</td>
            <td>
                <button type="button" onClick={e => handleEditClick(e, movie)}>Edit</button>
                <button type="button" onClick={e => handleDeleteClick(e, movie)}>Delete</button>

            </td>
        </tr>
    </>
  )
}
