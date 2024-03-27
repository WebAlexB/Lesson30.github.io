// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment} from '../actions/increment';
import { decrement} from '../actions/decrement';
import { reset } from '../actions/reset';

import NumberButton from '../numberButton/numberButton';
import Display from '../display/display';
import ResetButton from '../resetButton/resetButton';
import '../counter/counter.css';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.value);

    const handleButtonClick = operation => {
        if (operation === 'plus') {
            dispatch(increment());
        } else {
            dispatch(decrement());
        }
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div className="number-content">
            <div className="content-action">
                <NumberButton onClick={() => handleButtonClick('plus')} text="+" />
                <Display value={value} />
                <NumberButton onClick={() => handleButtonClick('minus')} text="-" />
            </div>
            <ResetButton onClick={handleReset} />
        </div>
    );
};

export default Counter;
