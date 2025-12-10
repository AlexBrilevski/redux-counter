import { createStore } from "redux";

const initState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, counter: state.counter + 1 };
    }
    case "INCREASE": {
      return { ...state, counter: state.counter + action.payload };
    }
    case "DECREMENT": {
      return { ...state, counter: state.counter - 1 };
    }
    case "TOGGLE": {
      return { ...state, showCounter: !state.showCounter };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(counterReducer);

export default store;
