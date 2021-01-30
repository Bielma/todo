import { Button } from 'react-bootstrap'
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {connect} from 'react-redux';
import {deleteTodo} from '../actions'

const ToDoList = (props) => {

    const { todoList } = props

    

    return (
        <div className={styles.grid}>
            {
                todoList.map(item =>

                 
                        <div className={styles.card} key = {item.id}>
                            <Link href={`/tododetail/${item.id}`}>                                    
                                <h3>{item.name} &rarr;</h3>                                                                
                            </Link>
                            <p>{item.description}</p>                
                                <input name="done" type="checkbox" />
                                <button 
                                    className="button" 
                                    onClick ={() => props.deleteTodo(item.id)}                                
                                >Del</button>
                            
                        </div>
                        
                       

                    


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

const mapDispathToProps = {
    deleteTodo,
    
}

export default connect(mapStateToProps, mapDispathToProps)(ToDoList)
