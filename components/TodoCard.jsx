import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { connect } from 'react-redux';
import { deleteTodo, editDone } from '../actions'


const TodoCard = (props) => {
    const {id, name, done, description, editDone, deleteTodo} = props
    return (
        <div className={styles.card} >
            <Link href={`/tododetail/${id}`}>
                <h3>{name} &rarr;</h3>
            </Link>
            <p>{description}</p>
            <input
                name="done"
                type="checkbox"
                checked={done}
                value={done}
                
                onChange={() => editDone(id)}
            />
            <button                
                onClick={() => deleteTodo(id)}
            >Delete</button>
               
        </div>
    )
}
const mapDispathToProps = {
    deleteTodo,
    editDone,

}
export default connect(null, mapDispathToProps)(TodoCard)
