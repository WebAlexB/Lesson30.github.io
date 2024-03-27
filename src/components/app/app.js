import React from 'react';
import '../app/app.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import Counter from '../counter/counter';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Counter />
            </div>
        </Provider>
    );
};

export default App;