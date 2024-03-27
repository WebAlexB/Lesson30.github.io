import React from 'react';
import '../app/app.css';
import Counter from "../counter/counter";

const App = () => {

    return (
        <div>
            <Counter  initialValue={5} />
        </div>
    );
};

export default App;