import { ACTION_TYPE_ADD_TODO, ACTION_TYPE_REMOVE_ALL, ACTION_TYPE_REMOVE_TODO } from "../actions";

const initialValue = [];

export default function TodoReducer(state = initialValue, action) {
  switch (action.type) {
    case ACTION_TYPE_ADD_TODO:
      return state.concat(action.text);
    case ACTION_TYPE_REMOVE_TODO:
      return state.slice(0, -1);
    case ACTION_TYPE_REMOVE_ALL:
      return [];
    default:
      return state;
  }
}
