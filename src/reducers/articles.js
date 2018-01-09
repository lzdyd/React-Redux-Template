import {
  GET_ATRICLES_REQUEST,
  GET_ATRICLES_SUCCESS,
  GET_ATRICLES_FAILURE
} from '../constants/articles';

const initialState = {
  articles: [],
  fetching: false
};

export default function articles(state = initialState, action) {
  switch (action.type) {
    case GET_ATRICLES_REQUEST:
      return { ...state, fetching: true };

    case GET_ATRICLES_SUCCESS:
      return { ...state, articles: action.payload, fetching: false };

    case GET_ATRICLES_FAILURE:
      return { ...state, fetching: false };

    default:
      return { ...state };
  }
}
