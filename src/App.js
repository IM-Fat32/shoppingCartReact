//biblioteki
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//komponenty projektu
import MainMenu from './components/MainMenu/MainMenu.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import ShopPage from './pages/shopPage/ShopPage.jsx';
import ProductPage from './pages/shopPage/ProductPage.jsx';

//style
import './App.css';


//komponent App uzywany w index.js
function App() {
  return (
    <>
    <div className="App">
      <Router>
        <MainMenu/>
        <div className="context--container">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/shop/:page" exact component={ShopPage}/>
            <Route path='/shop/product/:id' component={ProductPage}/>
          </Switch>
        </div>
      </Router>
    </div>
    </>
  );
}
export default App;
