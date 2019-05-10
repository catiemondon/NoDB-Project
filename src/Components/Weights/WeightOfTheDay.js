import React from 'react'


const WeightOfTheDay=(props)=>{
    return(
        <div>
            <h4>
            {props.exercisename}
            <p> Reps:{props.repcount}</p>
            </h4>
        </div>
    )
}

export default WeightOfTheDay