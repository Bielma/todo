import React, { useState } from 'react'
import {connect} from 'react-redux'
import {setOption} from '../actions'


const FilterForm = ({option, setOption}) => {

    //const [option, setOption] = useState("all")
    

    
    const  handleOptionChange = event  =>{
        event.preventDefault();    
        setOption(event.target.value)
    }

    return (
        <div>
            <label htmlFor="options">Filter by:</label>{' '}
            <select value = {option} name="options" id="options" onChange = {handleOptionChange}>                
                <option value="all" >All</option>
                <option value="done">Done</option>
                <option value="dontdone">Dont done</option>
            </select>
            <p> </p>
            <p></p>
        </div>
    )
}

const mapDispathToProps =  {
    setOption,
}

const mapStateToProps = state => {
    return{
        option: state.option,
    }

}

export default connect(mapStateToProps, mapDispathToProps) (FilterForm);
