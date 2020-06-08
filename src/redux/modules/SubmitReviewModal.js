import { put } from 'redux-saga/effects';
import {
  axiosFetch,
  EasyRedux,
  handleSagaSuccess,
  handleSagaError,
} from '../../utils';

const api = '/admin/review/management/edit';

export const { actionTypes, actions, reducer } = new EasyRedux('SubmitReview');

export function* watchTrackSubmitReview({
  payload: { ri, handleCloseModal, st },
}) {
  try {
    const { result } = yield axiosFetch(api, 'post', { ri, st });
    yield put(actions.loadSuccess(result));
    yield handleCloseModal();
    yield handleSagaSuccess('panel.alert.submitPost');
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
