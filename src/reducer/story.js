import { ADD_STORY } from '../action/type';

export default (state = [], action = null) => {
  switch (action.type) {
    case ADD_STORY:
      return state.concat([action.payload]);
    default:
      return state;
  }
};
