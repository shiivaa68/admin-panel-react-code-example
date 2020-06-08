import { put } from 'redux-saga/effects';
import { axiosFetch, handleSagaSuccess, handleSagaError } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = '/admin/post/management/edit';

export const { actionTypes, actions, reducer } = new EasyRedux('SubmitPost');

export function* watchTrackSubmitPost({
  payload: { pi, handleCloseModal, st, dc },
}) {
  try {
    const { result } = yield axiosFetch(api, 'post', { pi, st, dc });
    yield put(actions.loadSuccess(result));
    yield handleCloseModal();
    yield handleSagaSuccess('panel.alert.submitPost');
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
