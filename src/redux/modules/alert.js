import { positions } from '../../components/kit/Alert/positions';

export const SHOW_ALERT = 'SHOW_ALERT';
export const showAlert = (message, status, position) => ({
  type: SHOW_ALERT,
  message,
  status,
  position
});

export const HIDE_ALERT = 'HIDE_ALERT';
export const hideAlert = () => ({
  type: HIDE_ALERT
});

const initialState = {
  isOpen: false,
  message: 'home',
  position: positions.BOTTOM_END,
  status: 'success'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        position: action.position || initialState.position,
        status: action.status || initialState.status
      };
    case HIDE_ALERT:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
}
