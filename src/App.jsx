import React, { useState } from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Online Merchandise Store</h1>
      <p>Your one-stop shop for personalized T-shirt designs!</p>
    </header>
  );
}

function Product({ name, price, image, onAddToCart }) {
  return (
    <div className="product">
      <img src={image} alt={name} loading="lazy" />
      <h2>{name}</h2>
      <p>₱{price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(name, price)}>Add to Cart</button>
    </div>
  );
}

function Cart({ cartItems, totalPrice, onCheckout }) {
  return (
    <section className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index}>{item.name} - ₱{item.price.toFixed(2)}</div>
        ))}
      </div>
      <div className="total">
        <strong>Total: ₱{totalPrice.toFixed(2)}</strong>
      </div>
      <button onClick={onCheckout}>Checkout</button>
    </section>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (productName, productPrice) => {
    setCartItems([...cartItems, { name: productName, price: productPrice }]);
    setTotalPrice(totalPrice + productPrice);
  };

  const checkout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <div className="App">
      <Header />

      <main>
        <section className="products">
          <Product
            name="T-Shirt 1"
            price={500.00}
            image="/shirt1.jpg"
            onAddToCart={addToCart}
          />
          <Product
            name="T-Shirt 2"
            price={550.00}
            image="/shirt2.jpg"
            onAddToCart={addToCart}
          />
          <Product
            name="T-Shirt 3"
            price={900.00}
            image="/shirt3.jpg"
            onAddToCart={addToCart}
          />
        </section>

        <Cart cartItems={cartItems} totalPrice={totalPrice} onCheckout={checkout} />
      </main>

      <footer>
        <p>&copy; 2024 Online Merchandise Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
