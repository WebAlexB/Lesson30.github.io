import React, { useState, forwardRef, useImperativeHandle } from 'react';
import NumberButton from "../numberButton/numberButton";
import Display from "../display/display";
import ResetButton from "../resetButton/resetButton";
import '../counter/counter.css';

const Counter = forwardRef((props, ref) => {
    const [value, setValue] = useState(props.initialValue);

    const handleButtonClick = (operation) => {
        setValue(prevState => operation === "plus" ? prevState + 1 : prevState - 1);
    };

    const handleReset = () => {
        setValue(props.initialValue);
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
            <ResetButton onClick={handleReset} />
        </div>
    );
});

export default Counter;
