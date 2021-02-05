
import React from 'react'





const ToDoList = ({ children }) => {

    return (

        <table className="table">
            
                <tr className="table__header">
                    <th ></th>
                    <th >Title</th>
                    <th >Created</th>
                    <th className="table__header-desc">Description</th>
                </tr>
        

        
            {
                children
            }

        </table>






    )


}


export default ToDoList
