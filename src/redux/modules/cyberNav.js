 import { history } from '../../utils';

const navWidth = isNavOpen => isNavOpen ? '300px' : '80px';

export const OPEN_CYBER_NAV = 'OPEN_CYBER_NAV';
export const openCyberNav = () => ({
  type: OPEN_CYBER_NAV
});

export const CLOSE_CYBER_NAV = 'CLOSE_CYBER_NAV';
export const closeCyberNav = () => ({
  type: CLOSE_CYBER_NAV
});

export const TOGGLE_CYBER_NAV = 'TOGGLE_CYBER_NAV';
export const toggleCyberNav = () => ({
  type: TOGGLE_CYBER_NAV
});

const initialState = {
  isNavOpen: true,
  navWidth: navWidth(true)
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CYBER_NAV:
      return {
        isNavOpen: true,
        navWidth: navWidth(true)
      };
    case CLOSE_CYBER_NAV:
      return {
        isNavOpen: false,
        navWidth: navWidth(false)
      };
    case TOGGLE_CYBER_NAV:
      return {
        isNavOpen: history.location.pathname.includes('Map') ? true : !state.isNavOpen,
        navWidth: history.location.pathname.includes('Map') ? navWidth(true) : navWidth(!state.isNavOpen)
      };
    default:
      return state;
  }
}
