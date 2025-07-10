import React, { useState } from 'react'
import { increment, decrement, increaseByAmount } from './counterSlice';
import {useDispatch, useSelector} from 'react-redux'

const Counter = ()=> {
    const [inputValue, setInputValue] = useState('');
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
    const inputNumber = (e)=> {
        if(e.key === 'Enter') {
            const amount = parseInt(inputValue)
            if(!isNaN(amount)) {
                dispatch(increaseByAmount(amount))
                setInputValue('')
            }
        }
    }
    return (
        <div>
            <h1>hello</h1>
            <h1>count: {count}</h1>
            <div>
                <input 
                type="number" 
                placeholder='Enter quantity' 
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
                onKeyDown={inputNumber}/>

                <button onClick={()=> dispatch(increment())}>+</button>
                <button onClick={()=> dispatch(decrement())}>-</button>
            </div>
            <Link to="../components/login"></Link>
        </div>
    )
}
export default Counter;