import { put, delay } from 'redux-saga/effects';
import { showAlert, hideAlert } from "../redux/modules/alert";
import { positions } from "../components/kit/Alert/positions";
import { i18n } from "../localization";
import { actions as loginActions } from '../redux/modules/login';
import { history } from "./";

export default function* handleSagaError(error, status = 'failure', position = positions.TOP_END) {

  if (error.type === 'failed') {
    yield put(showAlert(i18n.t('error.500'), 'failure'));
    yield delay(10000);
    yield put(hideAlert());
    return;
  }

  if (error.type === 'internet') {
    yield put(showAlert(i18n.t('error.internet'), 'failure'));
    yield delay(10000);
    yield put(hideAlert());
    return;
  }

  if (error.type >= 500) {
    yield put(showAlert(i18n.t('error.500')));
    yield delay(10000);
    yield put(hideAlert());
    return;
  }

  if (error.type === 401 || error.code === 1003) {
    yield put(loginActions.resetCache());
    const pushTarget = yield history.location.pathname.includes('/panel') ? '/' : '/';
    yield history.push(pushTarget);
  }

  if (error.message) {
    yield put(showAlert(i18n.t(error.message), status, position));
    yield delay(10000);
    yield put(hideAlert());
  }
}
