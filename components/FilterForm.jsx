import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setOption } from '../actions'


const FilterForm = ({ option, setOption }) => {

    //const [option, setOption] = useState("all")



    const handleOptionChange = event => {
        event.preventDefault();
        setOption(event.target.value)
    }

    return (
        <div>

            <input type="date" />

        </div>
    )
}

const mapDispathToProps = {
    setOption,
}

const mapStateToProps = state => {
    return {
        option: state.option,
    }

}

export default connect(mapStateToProps, mapDispathToProps)(FilterForm);
