import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Content from "./Content";
import NotFound from "./NotFound";
import data from './data.json';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <h1>React App</h1>
            <ul className="header">
              {data.map(item => <li key={item.id}><NavLink exact={item.path === "/" ? true : false} to={item.path}>{item.title}</NavLink></li>)} 
            </ul>
            <div className="content">
              <Switch>
                {data.map(item => <Route exact={item.path === "/" ? true : false} key={item.id} path={item.path} render={(props) => <Content content={item} />} />)}
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default Main;
