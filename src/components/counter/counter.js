import React, { useState, forwardRef, useImperativeHandle } from 'react';
import NumberButton from "../numberButton/numberButton";
import Display from "../display/display";
import ResetButton from "../resetButton/resetButton";
import '../counter/counter.css';

const Counter = forwardRef((props, ref) => {
    const [value, setValue] = useState(props.value);

    const handleButtonClick = (operation) => {
        setValue(prevState => operation === "plus" ? prevState + 1 : prevState - 1);
    };

    const handleReset = () => {
        setValue(props.value);
    };

    useImperativeHandle(ref, () => ({
        handleReset: () => handleReset()
    }));

    return (
        <div className="number-content">
            <div className="content-action">
                <NumberButton onClick={() => handleButtonClick("plus")} text="+" />
                <Display value={value} />
                <NumberButton onClick={() => handleButtonClick("minus")} text="-" />
            </div>
            <ResetButton onClick={props.onReset} />
        </div>
    );
});

export default Counter;
