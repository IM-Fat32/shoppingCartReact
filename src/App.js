//biblioteki
import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'

//komponenty projektu
import MainMenu from './components/MainMenu/MainMenu.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import ShopPage from './pages/shopPage/ShopPage.jsx';
import CartPage from './pages/cartPage/CartPage.jsx';
import ProductPage from './pages/productPage/ProductPage.jsx';
import DonePage from './pages/donePage/DonePage.jsx';
import Footer from './components/Footer/Footer.jsx';

//style
import './App.css';

//komponent App uzywany w index.js
function App() {
  const location = useLocation();
  return (
    <>
    <div className="App">
        <MainMenu/>
        <div className="context--container">
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route path="/" exact component={HomePage}/>
              <Route path="/shop/:page" exact component={ShopPage}/>
              <Route path='/shop/product/:id' component={ProductPage}/>
              <Route path='/cart' component={CartPage}/>
              <Route path='/done' component={DonePage}/>
            </Switch>
          </AnimatePresence>
          <Footer/>
        </div>
    </div>
    
    </>
  );
}
export default App;