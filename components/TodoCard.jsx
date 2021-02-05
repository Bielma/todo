import React,{useState} from 'react'

import Link from 'next/link'
import { connect } from 'react-redux';
import { deleteTodo, editDone } from '../actions'
import PropTypes from 'prop-types';
import TodoDetailModal from './TodoDetailModal';

const TodoCard = (props) => {
    const { id, name, done, description, created, editDone } = props

    
    const [showDetail, setShowDetail] = useState(false)
    const openDetail = () =>{
        setShowDetail(showDetail ? false : true )
        console.log("Modal Detail...")
    }
    return (


        <tr className="table__rows" onClick = {openDetail}>
            <td className="round" onClick = {()=> editDone(id)}>           
                <input className="checkbox"
                    name="done"
                    type="checkbox"
                    checked={done}
                    value={done}
                    onChange={() => editDone(id)}
                />
                 <label htmlFor="checkbox"></label>
            </td>
            <td>{name}</td>
            <td>{created}</td>
            <td className="table__rows-desc">{description}</td>

    
            {
                showDetail &&
                <TodoDetailModal 
                    isOpen = {showDetail     } 
                    {...props}
                    /> 
            }
        </tr>


    )
}
const mapDispathToProps = {
    editDone,
}


TodoCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    done: PropTypes.bool,
    description: PropTypes.string,
}

export default connect(null, mapDispathToProps)(TodoCard)
