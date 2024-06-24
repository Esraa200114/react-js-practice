import { useState, useReducer } from 'react';

const initialInputState = {
    value: '',
    touched: false
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, touched: state.touched }
    } else if (action.type === 'BLUR') {
        return { touched: true, value: state.value }
    } else if (action.type === 'RESET') {
        return { touched: false, value: '' }
    }
    return inputStateReducer
}

const useInput = (validateValue) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    const enteredValueIsValid = validateValue(inputState.value);
    const hasError = !enteredValueIsValid && inputState.touched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    };

    const inputBlurHandler = (event) => {
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        value: inputState.value,
        isValid: enteredValueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
