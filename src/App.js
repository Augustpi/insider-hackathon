import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import './App.css';


function App () {
  let routes = (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch >
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={<p className={Suspense}> Yükleniyor...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
}

export default withRouter(App);
