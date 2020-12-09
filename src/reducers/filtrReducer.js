import {
  CHANGE_FILTR
} from '../actions/filtrActions.js';

export const filtrReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTR:
      const filtr = action.payload.filtr;
      state = filtr;
      return state;
    default:
      console.warn(`Brak akcji ${action.type} w fitlrActions`)
      return state;
  }
}
