import React from 'react'

import Link from 'next/link'
import { connect } from 'react-redux';
import { deleteTodo, editDone } from '../actions'
import PropTypes from 'prop-types';

const TodoCard = (props) => {
    const { id, name, done, description, editDone, deleteTodo } = props
    return (


        <tr className="table__rows">

            
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
            <td>22-02-2020</td>
            <td className="table__rows-desc">{description}</td>
        </tr>


    )
}
const mapDispathToProps = {
    deleteTodo,
    editDone,

}


TodoCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    done: PropTypes.bool,
    description: PropTypes.string,
}

export default connect(null, mapDispathToProps)(TodoCard)
