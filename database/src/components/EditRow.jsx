import React from 'react'

export default function EditRow( {handleFormEdit, editFormData, handleSaveClick} ) {
  return (

    <tr>
        <td>
            <input 
                type="text"
                name="title"
                value={editFormData.title}
                required="required"
                placeholder="Enter a title..."
                onChange={handleFormEdit}
            />
        </td>
        <td>
        <input 
                type="text"
                name="year"
                value={editFormData.year}
                required="required"
                placeholder="Enter a year..."
                onChange={handleFormEdit}
            />
        </td>
        <td>
        <input 
                type="text"
                name="grade"
                value={editFormData.grade}
                required="required"
                placeholder="Enter a grade..."
                onChange={handleFormEdit}
            />
        </td>
        <td>
            <button type="submit" onClick={e => handleSaveClick(e)}>Save</button>
        </td>
        
    </tr>

  )
}
