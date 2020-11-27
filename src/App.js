import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Menu from './components/menu/Menu.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import ShopPage from './pages/shopPage/ShopPage.jsx';
import ProductPage from './pages/shopPage/ProductPage.jsx';


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {<Menu/>}
        <div className="context--container">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route path='/product/:id' component={ProductPage}/>
          </Switch>
        </div>
      </Router>
    </div> 
  );
}

export default App;
