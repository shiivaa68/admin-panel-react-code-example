import { put } from 'redux-saga/effects';
import { i18n, languages } from "../../localization";
import { actions as sessionStart } from '../modules/sessionStart';

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  language
});

const initialState = languages.persian;

export default function reducer(state = initialState, action) {
  if (action.type === CHANGE_LANGUAGE) {
    return action.language;
  } else {
    return state;
  }
};

export function* handleLanguageOnAppStart(store) {
  const language = yield store.getState().language;
  yield setPageDirection(language.direction);
  yield setPageLanguage(language.detector);
  yield setPagePrefix();
  yield i18n.changeLanguage(language.detector);
  yield store.dispatch(sessionStart.load());
}

export function* handleChangeLanguage({ language }) {
  yield i18n.changeLanguage(language.detector);
  yield setPageDirection(language.direction);
  yield put(sessionStart.load());
}

function setPageDirection(direction) {
  document.getElementsByTagName('html')[0].setAttribute('dir', direction);
}

function setPageLanguage(language) {
  document.getElementsByTagName('html')[0].setAttribute('lang', language);
}

function setPagePrefix() {
  document.getElementsByTagName('html')[0].setAttribute('prefix', "og: http://ogp.me/ns#");
}
