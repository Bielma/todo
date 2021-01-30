import { Button } from 'react-bootstrap'
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {connect} from 'react-redux';
import {deleteTodo, editDone} from '../actions'

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
                                <input  
                                    name="done" 
                                    type="checkbox" 
                                    checked={item.done}                                    
                                    value = {item.done}
                                    onChange = {()=> props.editDone(item.id)}
                                    />
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
    editDone,
    
}

export default connect(mapStateToProps, mapDispathToProps)(ToDoList)
