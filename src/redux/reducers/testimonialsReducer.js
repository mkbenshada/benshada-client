import isDeleted from '../helper/isDeleted.js';

const INIT = { all: [], selected: {} };

export default (state = INIT, action) => {
  const responseData = isDeleted(action);


  return ({
    TESTIMONIALS_ALL_FULFILLED: { ...state, all: responseData },
    TESTIMONIALS_ONE_FULFILLED: { ...state, selected: responseData },
    TESTIMONIALS_ONE_SELECTED: { ...state, selected: action.payload },
    LOGOUT: INIT
  }[action.type] || state);
};
