import produce from 'immer';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch (action.type) {

        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;

        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;

        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;

        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payLoad;
            return;

        default:
            throw new Error('unexpected action type: ' + action.type);
    }
};

function CounterPage({ initialCount }) {
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payLoad: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        });
    };

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>
                    Increment
                </Button>
                <Button onClick={decrement}>
                    Decrement
                </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input type='number'
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                    value={state.valueToAdd || ''} onChange={handleChange} />
                <Button>Add it!</Button>
            </form>
        </Panel >
    );
}

export default CounterPage; 