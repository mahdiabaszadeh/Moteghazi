import React from 'react';
import './assets/css/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ListItems from './views/ListItems';
import ItemDetail from './views/ItemDetail';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/list-items/:limit/:skip" exact={true}>
                  <ListItems />
              </Route>
              <Route path="/item-detail/:code" exact={true}>
                <ItemDetail />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

