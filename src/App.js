import React from "react";
import './App.css';
import { isLogined } from './auth/Julog';
import { adminRoutes } from "./route/route";
import { Switch, Route, Redirect } from "react-router-dom";
import Mainpage from "./mianpage/Mainpage";
function App() { 
  return isLogined ? (
    <Mainpage>
      <Switch>
        {
        adminRoutes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={routeProps => {
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
        <Redirect to={adminRoutes[0].path} from="/admin" />
        <Redirect to="/404" />
      </Switch>
    </Mainpage>
  ):(<Redirect to="/login"/>);
}

export default App;
