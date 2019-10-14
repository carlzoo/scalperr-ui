import { Fetch_FAILURE, Set_Data, Fetch_GETTING } from '../actions/actionTypes';

const initialState = {
  isGetting: false,
  error: null,
  searchResult: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case Fetch_GETTING:
      return {
        ...state,
        isGetting: true,
        error: null
      };
    case Fetch_FAILURE:
      return {
        ...state,
        isGetting: false,
        error: action.error
      };
    case Set_Data:
      return {
        ...state,
        isGetting: false,
        searchResult: action.result,
        error: null
      };
    default:
      return state;
  }
};

