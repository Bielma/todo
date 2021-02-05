import React, { useState } from 'react'
import styles from '../styles/AddTask.module.css'
import Modal from 'react-modal';


import useForm from '../hooks/useForm'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

Modal.setAppElement('#__next')



const AddTaskForm = (props) => {
    const {addTodo, isOpen} = props
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [values, handleInputChange] = useForm({})

    const handleSubmit = event => {
        event.preventDefault();
        addTodo(values);
        closeModal()
    }

    function closeModal(){
        setIsOpen(false);
    }
     
   
    return (
        <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="react-modal"
        contentLabel="Add task"
     
        >
            <div className="modal">
                <header className="header">
                    <h3>New Task</h3>
                </header>
                <form onSubmit={handleSubmit} className="newTaskForm">
                    <label htmlFor="name">Title (Required)</label>
                    <input name="name"
                        type="text"
                        onChange={handleInputChange}
                        required="required" />
                    <label htmlFor="description">Description</label>
                    <textarea
                        rows="6"                        
                        name="description"
                        onChange={handleInputChange}>

                    </textarea>
                    <div className = "newTaskForm__buttons">
                    <button className="button-cancel" onClick = {closeModal}>Cancel</button>                
                    <button className="button-save">Save</button>
                    </div>
                    
                </form>

            </div>


        </Modal>

    )
}

const mapDispathToProps = {
    addTodo,
}

export default connect(null, mapDispathToProps)(AddTaskForm)
