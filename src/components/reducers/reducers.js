import { INCREMENT } from '../actions/increment';
import { DECREMENT } from '../actions/decrement';
import { RESET } from '../actions/reset';

const initialState = {
    value: 5
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value + 1 };
        case DECREMENT:
            return { ...state, value: state.value - 1 };
        case RESET:
            return { ...state, value: initialState.value };
        default:
            return state;
    }
};

export default counterReducer;