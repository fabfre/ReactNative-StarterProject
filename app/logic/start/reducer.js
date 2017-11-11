import {key, START} from './actions';

const initialState = {
  start: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START: {
      state.start = action.payload;
      return state;
    }
    default:
      return state;
  }
}
