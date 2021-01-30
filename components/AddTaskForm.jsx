import React from 'react'
import { Button } from 'react-bootstrap'
import useForm from '../hooks/useForm'
import {addTodo} from '../actions'
import {connect} from 'react-redux'
const AddTaskForm = (props) => {

    const [values, handleInputChange] = useForm({})

    const handleSubmit = event => {
        event.preventDefault();        
        props.addTodo(values);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input name="name"
                type="text"
                placeholder="Name"
                onChange={handleInputChange}
                required="required" />
            <input
                name="description"
                type="text"
                placeholder="Description"
                onChange={handleInputChange}
                required="required" />
            <button className="button">Add</button>
            
        </form>

    )
}

const mapDispathToProps = {
    addTodo,
}

export default connect(null, mapDispathToProps) (AddTaskForm)