import React, { useState, useRef } from 'react';
import '../app/app.css';
import Counter from "../counter/counter";

const App = () => {
    const [value, setValue] = useState(5);
    const counterRef = useRef(null);

    const handleUpdateValue = (newValue) => {
        setValue(newValue);
    };

    const handleReset = () => {
        setValue(0);
        if (counterRef.current) {
            counterRef.current.handleReset();
        }
    };


    return (
        <div>
            <Counter
                ref={counterRef}
                value={value}
                onUpdateValue={handleUpdateValue}
                onReset={handleReset}
            />
        </div>
    );
};

export default App;
