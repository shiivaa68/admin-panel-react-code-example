import { put } from 'redux-saga/effects';
import { axiosFetch, EasyRedux, handleSagaError } from '../../utils';

const api = '/admin/review/management/search';

export const { actionTypes, actions, reducer } = new EasyRedux(
  'trackReviewList'
);

export function* loadTrackReviewList({ payload }) {
  try {
    const { result } = yield axiosFetch(api, 'post', payload);
    yield put(actions.loadSuccess(result));
  } catch (e) {
    yield put(actions.loadFailure(e));
    yield handleSagaError(e);
  }
}

export default reducer;
