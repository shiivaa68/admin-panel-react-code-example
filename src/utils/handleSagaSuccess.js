import { put, delay } from 'redux-saga/effects';
import { showAlert, hideAlert } from '../redux/modules/alert';
import { positions } from '../components/kit/Alert/positions';

export default function* handleSagaSuccess(message, status = 'success', position = positions.TOP_END) {
  yield put(showAlert(message, status, position));
  yield delay(10000);
  yield put(hideAlert());
}

