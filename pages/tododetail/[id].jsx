import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import styles from './ProductDetail.module.css'
import { searchTodo, editTodo } from '../../actions'
import { useRouter } from 'next/router'
import useForm from '../../hooks/useForm'


const TodoDetail = ({ todo, searchTodo, editTodo }) => {
    const [editAllow, setEditAllow] = useState(false)
    const router = useRouter()
    const [values, handleInputChange] = useForm({})

    useEffect(() => {
        searchTodo(router.query.id)
        setEditAllow(true)
    }, [])

    const handleSubmit = event => {
        event.preventDefault();                
        editTodo({
            ...values,
            id: todo.id
        });
    }

    return editAllow ?
        (
            <main className={styles.main} >
                <h1 className={styles.title}>
                    {todo.name}
                </h1>
                <form onSubmit={handleSubmit}>

                    <input name="name"
                        type="text"
                        placeholder={todo.name}
                        onChange={handleInputChange}
                        required="required"
                    
                    />
                    <input
                        name="description"
                        type="text"
                        placeholder={todo.description}
                        onChange={handleInputChange}
                        required="required"
                     />
                    
                    <button className="button">Update</button>

                </form>

            </main>
        ) :
        (
            <main className={styles.main} >
                <h1 className={styles.title}>
                    Loading...
            </h1>
            </main>
        )
}

const mapStateToProps = state => {
    return {
        todo: state.todo,
    }
}

const mapDispathToProps = {
    editTodo,
    searchTodo,
}


export default connect(mapStateToProps, mapDispathToProps)(TodoDetail)
