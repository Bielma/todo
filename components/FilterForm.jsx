import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import {connect} from 'react-redux'
import {setOption} from '../actions'


const FilterForm = ({option, setOption}) => {

    //const [option, setOption] = useState("all")
    const [values, handleInputChange] = useForm({})

    const handleSubmit = event =>{
        event.preventDefault();
    }
    const  handleOptionChange = event  =>{
        event.preventDefault();    
        setOption(event.target.value)
    }

    return (
        <div>
            <label for="options">Filter by:</label>
            <select value = {option} name="options" id="options" onChange = {handleOptionChange}>                
                <option value="all" >Show all</option>
                <option value="done">Show all done task</option>
                <option value="dontdone">Show all dont done task</option>
            </select>
            <p> </p>
            <label for="search">Search:</label>
            <form name = "search" onSubmit={handleSubmit}>
                <input name="nameTask"
                    type="text"
                    placeholder="Task to seach"
                    onChange={handleInputChange}
                    required="required" />                
                <button className="button">Search</button>
            </form>
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
