import React from 'react'

export const SortTask = ({method}) => {
    return (
        <div>
            <button onClick={()=>method()}>Sort Tasks</button>
        </div>
    )
}
