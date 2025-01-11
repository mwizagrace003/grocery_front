import React from 'react'
import CustomerProducts from "../components/CustomerP";
import Cart from "../components/Cart";

const CustomerPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (product) =>
    setCart(cart.filter((item) => item.id !== product.id));
  const clearCart = () => setCart([]);

  return (
    <div>
      <CustomerProducts addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
    </div>
  );
};

export default CustomerPage;
