import React from 'react'


const WeightOfTheDay=(props)=>{
    return(
        <div>
            <h3>Today's Weights:</h3>
            {props.exercises}
        </div>
    )
}

export default WeightOfTheDay