import React from 'react'
import { Button } from 'react-bootstrap'
import useForm from '../hooks/useForm'


const AddTaskForm = (props) => {

    const [values, handleInputChange] = useForm({})

    const handleSubmit = event => {
        event.preventDefault()
        console.log(values);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input name="taskName"
                type="text"
                placeholder="Name"
                onChange={handleInputChange} />
            <input
                name="taskDesc"
                type="text"
                placeholder="Description"
                onChange={handleInputChange} />
            <button className="button">Add</button>
            
        </form>

    )
}

export default AddTaskForm
