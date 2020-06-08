import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { AppLoading } from './components/kit';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './localization';
import App from './App';
import { history }from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/font-icon/style.css';
import './assets/font/font-family.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <PersistGate loading={<AppLoading/>} persistor={persistor}>
          <Router history={history}>
            <I18nextProvider i18n={i18n}>
              <App/>
            </I18nextProvider>
          </Router>
        </PersistGate>
      </Provider>,
      document.getElementById('root')
    );
  });
};

serviceWorker.unregister();
