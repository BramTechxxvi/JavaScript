import React from 'react'
import { counterSlice } from './counterSlice';

const Counter = ()=> {
    return (
        <div>
            <h1>count: 0</h1>
            <div>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    )
}
export default Counter;