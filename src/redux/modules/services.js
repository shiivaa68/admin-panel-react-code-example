import { put } from 'redux-saga/effects';
import EasyRedux from '../../utils/EasyRedux';
import { axiosFetch, handleSagaError } from '../../utils';

const key = 'SERVICES/ALL';

export const { actionTypes, actions, reducer } = new EasyRedux(key);

export function* watchGetServices({ payload }) {
  try {
    const response = yield axiosFetch(
      '/admin/service/management/search',
      'post',
      payload
    );
    yield put(actions.loadSuccess(response.result));
  } catch (e) {
    console.log(e, 'this is e');
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
