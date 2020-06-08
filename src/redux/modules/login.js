import { put } from 'redux-saga/effects';
import {
  axiosFetch,
  history,
  setRegisterCacheItem,
  handleSagaError,
} from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = '/user/auth/loginPass';

export const { actionTypes, actions, reducer } = new EasyRedux('login');

export function* watchLogin({ payload }) {
  try {
    const { result } = yield axiosFetch(api, 'post', payload);
    yield setRegisterCacheItem('login', {});
    yield put(actions.loadSuccess(result.session.user));
    yield history.push('/panel');
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
