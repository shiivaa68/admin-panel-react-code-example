import { put } from 'redux-saga/effects';
import { axiosFetch, handleSagaError } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = '/admin/request/track/get';

export const { actionTypes, actions, reducer } = new EasyRedux(
  'getTrackRequest'
);

export function* watchGetTrackRequest({ payload: { ri } }) {
  try {
    const { result } = yield axiosFetch(api, 'post', { ri });
    yield put(actions.loadSuccess(result));
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
