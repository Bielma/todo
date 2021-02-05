import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import styles from '../../styles/Home.module.css'
import { searchTodo, editTodo } from '../../actions'
import { useRouter } from 'next/router'
import useForm from '../../hooks/useForm'


const TodoDetail = ({ todo, searchTodo, editTodo }) => {
    const [editAllow, setEditAllow] = useState(false)
    const router = useRouter()
    const [values, handleInputChange] = useForm({})

    useEffect(() => {
        getTodo()
    }, [])


    const getTodo = async () => {
        //router.query no funciona si introduces directamente la url. 
        await searchTodo(router.query.id)
        setEditAllow(true)

    }

    const handleSubmit = event => {
        event.preventDefault();
        editTodo({
            ...values,
            id: todo.id
        });
        alert("Update completed")


    }

    return editAllow ?
        (
            <main className={styles.main} >
                <h1 className={styles.title}>
                    {todo.name}
                </h1>
                <div className={styles.grid}>
                    <form onSubmit={handleSubmit} className={styles.form}>

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


                </div>

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
