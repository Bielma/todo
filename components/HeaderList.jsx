import React from 'react'
import FilterForm from './FilterForm'
import styles from '../styles/Home.module.css'
import icon from '../assets/add-icon.png'

const HeaderList = () => {
    return (
        <div className="header-list">

            <h3 className="header-list__title">Tasks</h3>

            <div className = "header-list__rigth">
                <FilterForm />
                <div className= "divider" >
                   <p>|</p> 
                </div>
                <span className = "add-button">
                    <img src={icon} alt="add icons" />
                    Add Task
                </span>
            </div>

        </div>
    )
}

export default HeaderList
