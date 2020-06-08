import { handleLanguageOnAppStart } from './language';
import { history } from '../../utils';

export function* watchRehydrate(store) {
  yield handleLanguageOnAppStart(store);
  if (history.location.pathname.toLowerCase().includes('/')) {
    const hasUserData = yield store.getState().login.data['_id'];
    if (!hasUserData) {
      yield history.push('/');
    } else {
      if (history.location.pathname === '/') {
        history.push('/panel')
      }
    }
  }
}
