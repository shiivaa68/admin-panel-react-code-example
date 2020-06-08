import React from 'react';
import Loadable from 'react-loadable';
import { AppLoading } from '../components/kit';

function loadable(name, loading = null) {
  return Loadable({
    loader: () => import(/* webpackChunkName: "[request]" */ `../containers/${name}`),
    loading: () => loading || <AppLoading/>,
    modules: [name]
  });
}

export default loadable;
