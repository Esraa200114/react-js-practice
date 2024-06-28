import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../store/CounterSlice";
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counterr);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementByAmountHandler = () => {
    dispatch(counterActions.incrementByAmount(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByAmountHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;