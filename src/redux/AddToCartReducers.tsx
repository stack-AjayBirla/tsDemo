import {ADD_ITEM, GET_LIST, REMOVE_ITEM} from './AddToCartActions';
const initailState = {list: [], count: 0};
export const addToCartReducer = (
  state = initailState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: action.payload,
        count: state.count + 1,
      };
    case GET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        list: action.payload,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
