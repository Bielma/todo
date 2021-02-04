import React, { useState } from 'react'
import FilterForm from './FilterForm'
import ReactDom from 'react-dom'
import icon from '../assets/add-icon.png'
import AddTaskForm from './AddTaskForm'


const HeaderList = () => {
    const [showModal, setShowModal] = useState(true)

    const openModal = () =>{
        setShowModal(showModal ? false : true )
    }
    
    return (
        <div className="header-list">

            <h3 className="header-list__title">Tasks</h3>

            <div className="header-list__rigth">
                <FilterForm />
                <div className="divider" >
                    <p>|</p>
                </div>
                <span className="add-button" onClick={openModal}>
                    <img src={icon} alt="add icons" />
                    Add Task
                </span>
            </div>
    
            {
                showModal &&
                <AddTaskForm isOpen = {showModal}/> 
            }
        </div>
    )
}

export default HeaderList
