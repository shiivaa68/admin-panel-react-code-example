import { put } from 'redux-saga/effects';
import { axiosFetch, handleSagaSuccess, handleSagaError } from '../../utils';
import EasyRedux from '../../utils/EasyRedux';

const api = '/admin/user/management/blockRequest';

export const { actionTypes, actions, reducer } = new EasyRedux(
  'trackBlockUser'
);

export function* watchTrackBlockUser({ payload: { ui, handleCloseModal } }) {
  try {
    const { result } = yield axiosFetch(api, 'post', { ui });
    yield put(actions.loadSuccess(result));
    yield handleCloseModal();
    yield handleSagaSuccess('panel.alert.block');
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
