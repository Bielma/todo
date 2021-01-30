import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { connect } from 'react-redux';
import { deleteTodo, editDone } from '../actions'


const TodoCard = (props) => {
    const {item, editDone, deleteTodo} = props
    return (
        <div className={styles.card} >
            <Link href={`/tododetail/${item.id}`}>
                <h3>{item.name} &rarr;</h3>
            </Link>
            <p>{item.description}</p>
            <input
                name="done"
                type="checkbox"
                checked={item.done}
                value={item.done}
                onChange={() => editDone(item.id)}
            />
            <button
                className="button"
                onClick={() => deleteTodo(item.id)}
            >Del</button>
        </div>
    )
}
const mapDispathToProps = {
    deleteTodo,
    editDone,

}
export default connect(null, mapDispathToProps)(TodoCard)
