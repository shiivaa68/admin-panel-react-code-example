import { put } from 'redux-saga/effects';
import { axiosFetch } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = '/session/start';

export const { reducer, actions, actionTypes } = new EasyRedux('sessionStart');

export function* watchSessionStart() {
  try {
    const body = {
      pl: 2,
      bl: 101,
      di: 'testing',
      dn: 'iPhone',
      os: '11.2.5',
    };
    const { result } = yield axiosFetch(api, 'post', body);
    yield localStorage.setItem('token', result.session.token);
    yield put(actions.loadSuccess());
  } catch (e) {
    yield put(actions.loadFailure(e));
    if (localStorage.getItem('token')) {
      yield localStorage.removeItem('token');
      yield put(actions.load());
    }
  }
}

export default reducer;
