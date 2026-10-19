
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items || []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('Thank you for shopping with Paradise Nursery! Checkout Coming Soon.');
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '1100px',
      margin: 'auto'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        background: '#164e35',
        color: 'white',
        padding: '18px',
        borderRadius: '8px'
      }}>
        <h2>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="./App.jsx" style={{ color: 'white' }}>Home</a>
          <a href="./ProductList.jsx" style={{ color: 'white' }}>
            Plants
          </a>
          <a href="./CartItem.jsx" style={{ color: 'white' }}>
            🛒 Cart ({cartItems.reduce(
              (sum, item) => sum + item.quantity, 0
            )})
          </a>
        </div>
      </nav>

      <h1 style={{ textAlign: 'center' }}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2>Your cart is empty!</h2>
          <p>Discover our beautiful collection of houseplants.</p>
          <a href="./ProductList.jsx">
            <button style={buttonStyle}>
              Continue Shopping
            </button>
          </a>
        </div>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              marginBottom: '15px'
            }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '110px',
                  height: '110px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />

              <div style={{ flex: '1', minWidth: '150px' }}>
                <h3>{item.name}</h3>
                <p>Unit Price: ₹{item.price.toFixed(2)}</p>
                <p>
                  Item Total: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <button
                  onClick={() => dispatch(updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                  }))}
                  style={buttonStyle}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => dispatch(updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1
                  }))}
                  style={buttonStyle}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{
                  ...buttonStyle,
                  background: '#dc3545'
                }}
              >
                Delete
              </button>
            </div>
          ))}

          <div style={{
            textAlign: 'right',
            padding: '20px',
            background: '#f2f7f3',
            borderRadius: '10px'
          }}>
            <h2>Total Amount: ₹{totalAmount.toFixed(2)}</h2>

            <button
              onClick={handleCheckout}
              style={{
                ...buttonStyle,
                background: '#198754',
                marginRight: '10px'
              }}
            >
              Checkout
            </button>

            <a href="./ProductList.jsx">
              <button style={buttonStyle}>
                Continue Shopping
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

const buttonStyle = {
  background: '#198754',
  color: 'white',
  border: 'none',
  padding: '10px 16px',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '4px'
};

export default CartItem;
