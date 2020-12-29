import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { HashRouter,Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import store from "./store"
import {mainRoutes} from './route/route'


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/admin" render={routeProps => <App {...routeProps} />} />
        {mainRoutes.map(route => {
          return <Route key={route.path} {...route} />;
        })}
        <Redirect to="/admin" from="/" />
        <Redirect to="/404" />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
