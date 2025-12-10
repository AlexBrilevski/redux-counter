import { useSelector, useDispatch } from 'react-redux';
import { counterActionType } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: counterActionType.increment });
  };

  const increaseHandler = () => {
    dispatch({ type: counterActionType.increase, payload: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: counterActionType.decrement });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: counterActionType.toggle });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
