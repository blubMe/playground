import React from 'react'
import Counter from './../components/counter'


const Count = ({onReset,onDelete,onIncrement,onDecrement,counter}) => (
    <div>
    <button onClick={onReset}>Reset</button>
    {counter.map(c => (
        <Counter key={c.id} counter={c} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete}/>
    ))}
    </div>
)

export default Count