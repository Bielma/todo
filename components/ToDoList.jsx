
import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
//import { Button } from 'bootstrap-4-react';
import styles from '../styles/Home.module.css'


const ToDoList = ({ children }) => {

    return (

        <>
                   
            <div className={styles.grid}>
                {
                    children
                }
            </div>
        </>



    )


}


export default ToDoList
