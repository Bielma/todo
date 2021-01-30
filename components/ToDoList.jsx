
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { connect } from 'react-redux';
import TodoCard from './TodoCard'

const ToDoList = (props) => {

    const { todoList, option } = props


    switch(option){
        case 'all':
            return (
                <div className={styles.grid}>
                    {                
                        todoList.map(item =>                                  
                                <TodoCard item = {item} key={item.id}/>                                                                                 
                        )
                    }
                </div>
            )
        case 'done':
            return (
                <div className={styles.grid}>
                    {                
                        todoList.map(item =>                                  
                                item.done &&
                                <TodoCard item = {item} key={item.id}/>                                                                                 
                        )
                    }
                </div>
            )
        case 'dontdone':
            return (
                <div className={styles.grid}>
                    {                
                        todoList.map(item =>                                  
                                !item.done &&
                                <TodoCard item = {item} key={item.id}/>                                                                                 
                        )
                    }
                </div>
            )
        default:
            return (
                <div className={styles.grid}>
                    {                
                        todoList.map(item =>                                  
                                <TodoCard item = {item} key={item.id}/>                                                                                 
                        )
                    }
                </div>
            )
    }
    
}


const mapStateToProps = state => {
    return {
        todoList: state.todoList,
        option: state.option,
    }
}



export default connect(mapStateToProps, null)(ToDoList)
