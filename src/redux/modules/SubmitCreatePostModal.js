import { put } from 'redux-saga/effects';
import { axiosFetch, handleSagaSuccess, handleSagaError } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = '/admin/post/management/sent';

export const { actionTypes, actions, reducer } = new EasyRedux(
  'SubmitCreatePost'
);

export function* watchSubmitCreatePost({ payload: { pi, handleCloseModal } }) {
  try {
    const { result } = yield axiosFetch(api, 'post', { pi });
    yield put(actions.loadSuccess(result));
    yield handleCloseModal();
    yield handleSagaSuccess('panel.alert.submitcreatepost');
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
