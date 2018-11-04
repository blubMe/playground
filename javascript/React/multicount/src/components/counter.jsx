import React from 'react'

const Counter = props => (
    <div>
        <span>{props.counter.val}</span>
        <button onClick={() => props.onIncrement(props.counter)}>Increments</button>
        <button onClick={() => props.onDelete(props.counter.id)}>Delete</button>
    </div>
)

export default Counter
