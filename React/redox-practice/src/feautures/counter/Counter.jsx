import React from 'react'
import { increment, decrement, increaseByAmount } from './counterSlice';
import {useDispatch, useSelector} from 'react-redux'

const Counter = ()=> {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>hello</h1>
            <h1>count: {count}</h1>
            <div>
                <input 
                type="text" 
                placeholder='Enter quantity' 
                // value={Input-value}
                onInput={()=> dispatch(increaseByAmount())}/>

                <button onClick={()=> dispatch(increment())}>+</button>
                <button onClick={()=> dispatch(decrement())}>-</button>
            </div>
        </div>
    )
}
export default Counter;