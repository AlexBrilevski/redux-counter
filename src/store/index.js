import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterInitState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  }
});

const authInitState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: authInitState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  }
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;
