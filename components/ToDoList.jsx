
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { connect } from 'react-redux';
import TodoCard from './TodoCard'

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
