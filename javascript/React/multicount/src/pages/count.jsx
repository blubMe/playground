import React from 'react'
import Counter from './../components/counter'


const Count = ({onReset,onDelete,onIncrement,counter}) => (
    <div>
    <button onClick={onReset}>Reset</button>
    {counter.map(c => (
        <Counter key={c.id} counter={c} onIncrement={onIncrement} onDelete={onDelete}/>
    ))}
    </div>
)

export default Count