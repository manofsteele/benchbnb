import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const sessionReducer = (state, action) => {
  Object.freeze(state);

  let _defaultState = {
    id: null
  };

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        id: action.currentUser.id
      };
    case LOGOUT_CURRENT_USER:
      return _defaultState;
    default:
      return state;

  }
};

export default sessionReducer;
