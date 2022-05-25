import React from 'react'

export const DeleteTask = ({id, method}) => {
    return (
        <div className="deleteTask">
            <button onClick={()=>method(id)}>Delete</button>
        </div>
    )
}
