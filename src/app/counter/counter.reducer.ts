// Reducer?
// Fn that will take in two params -- action, state 

import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

const initalState = 0;

export const counterReducer = createReducer(
  initalState, 
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => {
    return state - 1;
  }),
  on(reset, (state) => {
    return 0;
  })
)