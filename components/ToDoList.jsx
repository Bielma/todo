import { Button } from 'react-bootstrap'
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {connect} from 'react-redux';


const ToDoList = (props) => {


    const handleSubmit = () => {


    }

    const { todoList } = props
    return (
        <div className={styles.grid}>
            {
                todoList.map(item =>

                    <Link href={`/tododetail/${item.id}`} key= {item.id}>
                        
                        <a className={styles.card} >
                            <h3>{item.name} &rarr;</h3>
                            <p>{item.description}</p>
                            <Button variant="primary">Delete</Button>{' '}
                            <input name="done" type="checkbox" />
                        </a>
                    </Link>


                )
            }
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        todoList: state.todoList
    }
}

export default connect(mapStateToProps, null)(ToDoList)
