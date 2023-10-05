import { createActions, handleActions, combineActions } from "redux-acitons";

const defaultState = { count: 0 };

const { increase, decrease } = createActions({
  INCREASE: (amount) => {
    return { amount };
  },
  DECREASE: (amount) => {
    return { amount };
  }
});

const reducer = handleActions(
  {
    [combineActions(increase, decrease)]: (state, action) => {
      return {
        conut: state.count + action.payload.amount
      };
    }
  },
  defaultState
);

export default reducer;
