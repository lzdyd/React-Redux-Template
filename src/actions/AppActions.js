import {
  SET_NAME
} from '../constants/index';

export function setName() {
  return {
    type: SET_NAME,
    payload: 'New name'
  };
}
