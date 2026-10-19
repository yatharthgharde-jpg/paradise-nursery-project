
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 350,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b44?w=400'
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 450,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 250,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400'
  },
  {
    id: 4,
    name: 'Areca Palm',
    price: 550,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400'
  },
  {
    id: 5,
    name: 'Aloe Vera',
    price: 200,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 6,
    name: 'Rubber Plant',
    price: 400,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 7,
    name: 'Monstera',
    price: 600,
    category: 'Decorative',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
  },
  {
    id: 8,
    name: 'Fiddle Leaf Fig',
    price: 750,
    category: 'Decorative',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 9,
    name: 'Calathea',
    price: 450,
    category: 'Decorative',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 10,
    name: 'Croton',
    price: 300,
    category: 'Decorative',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
  },
  {
    id: 11,
    name: 'Chinese Evergreen',
    price: 380,
    category: 'Decorative',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 12,
    name: 'Dracaena',
    price: 500,
    category: 'Decorative',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 13,
    name: 'Jade Plant',
    price: 220,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 14,
    name: 'Echeveria',
    price: 180,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 15,
    name: 'Haworthia',
    price: 200,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 16,
    name: 'String of Pearls',
    price: 320,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 17,
    name: 'Panda Plant',
    price: 250,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 18,
    name: 'Burro’s Tail',
    price: 280,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items || []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
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
          <a href="#plants" style={{ color: 'white' }}>Plants</a>
          <a href="./CartItem.jsx" style={{ color: 'white' }}>
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      <h1 id="plants" style={{ textAlign: 'center' }}>
        Our Houseplants
      </h1>

      <p style={{ textAlign: 'center' }}>
        Bring nature home with our beautiful plants.
      </p>

      {categories.map(category => (
        <section key={category} style={{ marginBottom: '35px' }}>
          <h2>{category}</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {plants.filter(plant => plant.category === category).map(plant => {
              const isAdded = cartItems.some(
                item => item.id === plant.id
              );

              return (
                <div key={plant.id} style={{
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  padding: '15px',
                  textAlign: 'center'
                }}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />

                  <h3>{plant.name}</h3>
                  <p>Price: ₹{plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isAdded}
                    style={{
                      background: isAdded ? '#888' : '#198754',
                      color: 'white',
                      border: 'none',
                      padding: '10px 15px',
                      borderRadius: '5px',
                      cursor: isAdded ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
