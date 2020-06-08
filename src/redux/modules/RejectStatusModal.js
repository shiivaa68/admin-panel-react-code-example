import { put } from 'redux-saga/effects';
import { axiosFetch, handleSagaSuccess, handleSagaError } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = '/admin/request/track/reject';

export const { actionTypes, actions, reducer } = new EasyRedux('RejectStatus');

export function* watchRejectStatus({ payload: { ri, handleCloseModal } }) {
  try {
    const { result } = yield axiosFetch(api, 'post', { ri });
    yield put(actions.loadSuccess(result));
    yield handleCloseModal();
    yield handleSagaSuccess('panel.alert.block');
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
