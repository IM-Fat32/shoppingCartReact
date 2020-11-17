
import './App.css';
import ProductList from './components/shop/ProductsList/ProductsList.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h2>Shop</h2>
        </nav>
      </header>
      <section>
        <ProductList/>
      </section>
    </div>
  );
}

export default App;
