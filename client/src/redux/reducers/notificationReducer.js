import isDeleted from '../helper/isDeleted.js';

const INIT = { all: [], selected: {} };

export default (state = INIT, action) => {
  const responseData = isDeleted(action);

  return (
    {
      NOTIFICATIONS_ALL_FULFILLED: { ...state, all: responseData },
      NOTIFICATIONS_ONE_SELECTED: { ...state, selected: action.payload },
      LOGOUT: { ...state, selected: {} }
    }[action.type] || state
  );
};
