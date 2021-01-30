
import React from 'react'
import styles from '../styles/Home.module.css'


const ToDoList = ({ children }) => {

    return (
        <div className={styles.grid}>
            {
                children
            }
        </div>
    )


}


export default ToDoList
