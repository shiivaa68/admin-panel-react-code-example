import { put } from 'redux-saga/effects';
import { axiosFetch, handleSagaSuccess, handleSagaError } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = '/admin/media/edit/upload';

export const { actionTypes, actions, reducer } = new EasyRedux('UploadImgPost');

export function* watchUploadImgPost({
  payload: { handleCloseModal, uploadMedia },
}) {
  try {
    const { result } = yield axiosFetch(api, 'post', uploadMedia, true);
    yield put(actions.loadSuccess(result));
    yield handleCloseModal();
    yield handleSagaSuccess('panel.alert.uploadimg');
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
