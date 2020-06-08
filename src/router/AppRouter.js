import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from './loadable';
import NoMatch from '../containers/NoMatch';
import CyberLayout from '../components/Cyber/Layout/CyberLayout';

export default function AppRouter() {
  return (
    <>
      <CyberLayout/>
      <Switch>
        <Route exact path="/" component={loadable('Login')}/>
        <Route exact path="/panel" component={loadable('Dashboard')}/>
        <Route exact path="/panel/Logout" component={loadable('Logout')}/>
        <Route exact path="/kits" component={loadable('Kits')}/>
        <Route exact path="/test" component={loadable('Test')}/>
        <Route exact path="/panel/List/:pageName" component={loadable('List')}/>
        <Route exact path="/notFound" component={NoMatch}/>
        <Route component={NoMatch}/>
      </Switch>
    </>
  );
}
