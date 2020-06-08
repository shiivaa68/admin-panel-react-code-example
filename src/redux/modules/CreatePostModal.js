import { put } from 'redux-saga/effects';
import { axiosFetch, handleSagaSuccess, handleSagaError } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = '/admin/post/management/create';

export const { actionTypes, actions, reducer } = new EasyRedux('CreatePost');

export function* watchTrackCreatePost({
  payload: { bi, handleCloseModal, tp = 1, si, tl, tx },
}) {
  try {
    const { result } = yield axiosFetch(api, 'post', { bi, tp, si, tl, tx });
    yield put(actions.loadSuccess(result));
    yield handleCloseModal();
    yield handleSagaSuccess('panel.alert.submitPost');
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
