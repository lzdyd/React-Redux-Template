import {
  GET_DATA_REQUEST
} from '../constants/index';

/**
 * Created by lzdyd
 */

/**
 * @description Creates initial state for...
 */
const initialState = {
  data: {},
  fetching: false
};

export default function employeesTable(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, fetching: true };

    default:
      return state;
  }
}
