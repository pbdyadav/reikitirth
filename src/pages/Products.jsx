import React, { useState } from 'react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Amethyst Crystal Set',
      description: 'Natural amethyst crystals for healing and meditation',
      price: '₹x,xxx',
      category: 'crystals',
      icon: '🔮'
    },
    {
      id: 2,
      name: 'Clear Quartz Points',
      description: 'Amplify energy and enhance clarity with clear quartz',
      price: '₹xxx',
      category: 'crystals',
      icon: '💎'
    },
    {
      id: 3,
      name: 'Meditation Aasan',
      description: 'Comfortable meditation cushion for daily practice',
      price: '₹x,xxx',
      category: 'aasan',
      icon: '🧘'
    },
    {
      id: 4,
      name: 'Premium Yoga Mat',
      description: 'High-quality yoga mat for Reiki and meditation',
      price: '₹x,xxx',
      category: 'aasan',
      icon: '🪑'
    },
    {
      id: 5,
      name: 'Antahkaran Bed Sheet',
      description: 'Energy-infused bed sheet for better sleep and healing',
      price: '₹x,xxx',
      category: 'bedsheet',
      icon: '🛏️'
    },
    {
      id: 6,
      name: 'Complete Reiki Box',
      description: 'Comprehensive kit with crystals, symbols, and guides',
      price: '₹x,xxx',
      category: 'reikibox',
      icon: '📦'
    },
    {
      id: 7,
      name: 'Starter Reiki Kit',
      description: 'Essential items for beginners starting Reiki practice',
      price: '₹x,xxx',
      category: 'reikibox',
      icon: '🎁'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'crystals', name: 'Crystals' },
    { id: 'aasan', name: 'Aasan' },
    { id: 'bedsheet', name: 'Antahkaran Bed Sheets' },
    { id: 'reikibox', name: 'Reiki Box' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getCategoryClass = (category) => {
    const categoryClasses = {
      crystals: 'crystals-bg',
      aasan: 'aasan-bg',
      bedsheet: 'bedsheet-bg',
      reikibox: 'reikibox-bg'
    };
    return categoryClasses[category] || 'crystals-bg';
  };

  return (
    <section className="products">
      <div className="container">
        <h2 className="section-title">Reiki Products</h2>
        
        <div className="product-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className={`placeholder-image ${getCategoryClass(product.category)}`}>
                  {product.icon}
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">{product.price}</div>
                <a 
                  href={`https://wa.me/9926271789?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                  className="buy-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;