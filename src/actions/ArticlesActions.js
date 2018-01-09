import getArticlesAPI from 'api/articles/getArticles';

import {
  GET_ATRICLES_REQUEST,
  GET_ATRICLES_SUCCESS,
  GET_ATRICLES_FAILURE
} from '../constants/articles';

export function getAtricles() {
  return (dispatch) => {
    dispatch({
      type: GET_ATRICLES_REQUEST,
    });

    setTimeout(() => {
      getArticlesAPI()
        .then((response) => {
          dispatch({
            type: GET_ATRICLES_SUCCESS,
            payload: JSON.parse(response)
          });
        })
        .catch((err) => {
          dispatch({
            type: GET_ATRICLES_FAILURE,
            payload: JSON.parse(err)
          });
        });
    }, 2500);
  };
}
