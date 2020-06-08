import { put } from 'redux-saga/effects';
import { axiosFetch, history, handleSagaError } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';
import { actions as loginActions } from './login';

const api = '/user/auth/logout';

export const { actionTypes, actions, reducer } = new EasyRedux('logout');

export function* watchLogout() {
  try {
    yield axiosFetch(api, 'post');
    yield put(actions.loadSuccess());
    yield put(loginActions.resetCache());
    yield history.replace('/');
    yield handleSagaError({ message: 'logout.success' }, 'success');
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
