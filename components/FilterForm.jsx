import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setOption, setDate } from '../actions'


const FilterForm = ({ setDate, setOption }) => {

    
    


    const handleOptionChange = ({target}) => {        
        setOption('otherday')
        setDate(target.value)

    }

    
    return (
        <div>

            <input type="date"  onChange = {handleOptionChange}/>

        </div>
    )
}

const mapDispathToProps = {
    setOption,
    setDate,
}



export default connect(null, mapDispathToProps)(FilterForm);
