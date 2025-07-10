import React, { useState } from 'react'
import { increment, decrement, incrementByAmount } from './counterSlice';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router';

const Counter = ()=> {
    const [inputValue, setInputValue] = useState('');
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
    const inputNumber = (e)=> {
        if(e.key === 'Enter') {
            const amount = parseInt(inputValue)
            if(!isNaN(amount)) {
                dispatch(incrementByAmount(amount))
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
            <Link to="../components/login">Login</Link>
            <Link to="../components/signup">SignUp</Link>
        </div>
    )
}
export default Counter;