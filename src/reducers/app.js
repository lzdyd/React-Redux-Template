import {
  SET_NAME
} from '../constants/index';

const initialState = {
  name: 'Name 1'
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };

    default:
      return state;
  }
}
