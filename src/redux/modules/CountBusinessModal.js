import { put } from 'redux-saga/effects';
import { axiosFetch, handleSagaError } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = 'admin/user/management/search';

export const { actionTypes, actions, reducer } = new EasyRedux('CountBusiness');

export function* watchCountBusiness({ payload }) {
  try {
    const { result } = yield axiosFetch(api, 'post', payload);
    yield put(actions.loadSuccess(result));
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
