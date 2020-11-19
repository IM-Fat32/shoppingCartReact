import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Menu from './components/menu/Menu.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import ShopPage from './pages/shopPage/ShopPage.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {<Menu/>}
        <div className="context--container">
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/shop">
              <ShopPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div> 
  );
}

export default App;
