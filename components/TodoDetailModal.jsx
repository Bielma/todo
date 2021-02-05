import Modal from 'react-modal';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { searchTodo, deleteTodo, editDone } from '../actions'
import styles from '../styles/DetailModal.module.css'

Modal.setAppElement('#__next')

const TodoDetailModal = (props) => {


    const { todo, searchTodo, deleteTodo, id, name, done, description, isOpen, created } = props
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    //const [status, setStatus] = useState()
    function closeModal() {
        setIsOpen(false);
    }

    const handleOptionChange = () => {
        editDone(id)
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="detail-modal"
            contentLabel="Task info"

        >
            <div className="detail-modal__container">
                <h2>{name}</h2>
                <select
                    value={done}
                    name="status"
                    id="staus"
                    onChange={handleOptionChange}>
                    <option value={false} >Status: Pending</option>
                    <option value={true}>Status: Done</option>
                </select>

                <div className="created">
                    <h3>Created</h3>
                    <p>{created}</p>
                </div>
                <div className="desc">
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
                <p>Updated Today 02:35pm, by tony</p>
                <div className="buttons">
                    <button> Edit</button>
                    <button> Cancel</button>
                </div>


            </div>


        </Modal>
    )
}
const mapStateToProps = state => {
    return {
        todo: state.todo,
    }
}

const mapDispathToProps = {
    deleteTodo,
    searchTodo
}


export default connect(mapStateToProps, mapDispathToProps)(TodoDetailModal)


