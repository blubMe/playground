import React from 'react'

const Counter = props => (
    <div>
        <span>{props.counter.val}</span>
        <button onClick={() => props.onIncrement(props.counter)}>+</button>
        <button disabled={props.counter.val === 0} onClick={() => props.onDecrement(props.counter)}>-</button>
        <button onClick={() => props.onDelete(props.counter.id)}>x</button>
    </div>
)

export default Counter
