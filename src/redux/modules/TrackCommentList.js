import { put } from 'redux-saga/effects';
import { axiosFetch, EasyRedux, handleSagaError } from '../../utils';

const api = '/admin/comment/management/search';

export const { actionTypes, actions, reducer } = new EasyRedux(
  'trackCommentList'
);

export function* loadTrackCommentList({ payload }) {
  try {
    const { result } = yield axiosFetch(api, 'post', payload);
    yield put(actions.loadSuccess(result));
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
