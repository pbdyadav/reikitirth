import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [popupImageIndex, setPopupImageIndex] = useState(0);
  const navigate = useNavigate();


  // ✅ Swipe states
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // ✅ OPEN POPUP
  const openPopup = (product, index = 0) => {
    setSelectedProduct(product);
    setPopupImageIndex(index);
    setPopupOpen(true);
  };

  // ✅ AUTO SLIDER
  useEffect(() => {
    if (!popupOpen || !selectedProduct) return;

    const interval = setInterval(() => {
      setPopupImageIndex(prev =>
        (prev + 1) % selectedProduct.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [popupOpen, selectedProduct]);

  // ✅ SWIPE LOGIC
  const handleSwipe = () => {
    if (!selectedProduct) return;

    if (touchStartX - touchEndX > 50) {
      // Swipe left
      setPopupImageIndex(prev =>
        (prev + 1) % selectedProduct.images.length
      );
    }

    if (touchEndX - touchStartX > 50) {
      // Swipe right
      setPopupImageIndex(prev =>
        (prev - 1 + selectedProduct.images.length) %
        selectedProduct.images.length
      );
    }
  };

  // ✅ PRODUCTS (UNCHANGED)
  const products = [
    {
      id: 1,
      name: 'Reiki Ist Degree Book (रेकी प्रथम डिग्री पुस्तक)',
      description: 'Reiki Ist Degree Book for all New Students only.',
      price: '₹ 0',
      category: 'book',
      images: [
        '/images/products/book/RIFP.png',
        '/images/products/book/RIBP.png'
      ]
    },
    {
      id: 2,
      name: 'Reiki IInd Degree Book (रेकी द्वितीय डिग्री पुस्तक)',
      description: 'Reiki IInd Degree Book for all New Students only.',
      price: '₹ 0',
      category: 'book',
      images: [
        '/images/products/book/RIIFP.png',
        '/images/products/book/RIIBP.png'
      ]
    },
    {
      id: 3,
      name: 'Prosperity Box (समृद्धि बॉक्स)',
      description: 'समृद्धि बॉक्स - लक्ष्मी पूजन सामग्री (दिवाली विशेष)',
      price: '₹x,xxx',
      category: 'box',
      images: [
        '/images/products/1.png',
        '/images/products/2.png',
        '/images/products/3.png'
      ]
    },
    {
      id: 4,
      name: 'Antahkaran Pillow cover (अंतःकरण तकिया कवर)',
      description: 'High-quality Pillow cover for Reiki healing.',
      price: '₹xxx',
      category: 'antahkaran',
      images: [
        '/images/products/pillow.png',
        '/images/products/pillow.png'
      ]
    },
    {
      id: 5,
      name: 'Antahkaran Bed Sheet',
      description: 'Energy-infused bed sheet',
      price: '₹x,xxx',
      category: 'bedsheet',
      images: ['/images/products/bedsheet/1.png']
    },
    {
      id: 6,
      name: 'Complete Reiki Box',
      description: 'Complete kit',
      price: '₹x,xxx',
      category: 'reikibox',
      images: ['/images/products/reikibox/1.png']
    },
    {
      id: 7,
      name: 'Starter Reiki Kit',
      description: 'Beginner kit',
      price: '₹x,xxx',
      category: 'reikibox',
      images: ['/images/products/reikibox/2.png']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'book', name: 'Book' },
    { id: 'aasan', name: 'Aasan' },
    { id: 'antahkaran', name: 'Antahkaran' },
    { id: 'box', name: 'Reiki Box' }
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <section className="products">
      <div className="container">
        <h2 className="section-title">Reiki Products</h2>

        {/* CATEGORY */}
        <div className="product-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''
                }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: "pointer" }}
            >

              {/* IMAGE */}
              <div className="product-image">
                <img
                  src={product.images[activeImageIndex[product.id] || 0]}
                  alt={product.name}
                />

                {/* DOTS */}
                {product.images.length > 1 && (
                  <div className="image-dots">
                    {product.images.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${(activeImageIndex[product.id] || 0) === index
                            ? 'active'
                            : ''
                          }`}
                        onClick={(e) => {
                          e.stopPropagation(); // 🔥 IMPORTANT
                          setActiveImageIndex(prev => ({
                            ...prev,
                            [product.id]: index
                          }));
                        }}
                      ></span>
                    ))}
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">{product.price}</div>

                <a
                  href={`https://wa.me/9926271789?text=Order ${product.name}`}
                  className="buy-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // 🔥 IMPORTANT
                >
                  Order Now
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 🔥 POPUP */}
      {popupOpen && selectedProduct && (
        <div className="popup-overlay" onClick={() => setPopupOpen(false)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) =>
              setTouchStartX(e.targetTouches[0].clientX)
            }
            onTouchMove={(e) =>
              setTouchEndX(e.targetTouches[0].clientX)
            }
            onTouchEnd={handleSwipe}
          >
            <span className="close-btn" onClick={() => setPopupOpen(false)}>
              ✖
            </span>

            {/* MAIN IMAGE */}
            <img
              src={selectedProduct.images[popupImageIndex]}
              alt="popup"
              className="popup-image"
            />

            {/* NAV */}
            {selectedProduct.images.length > 1 && (
              <>
                <button
                  className="nav prev"
                  onClick={() =>
                    setPopupImageIndex(
                      (popupImageIndex - 1 + selectedProduct.images.length) %
                      selectedProduct.images.length
                    )
                  }
                >
                  ◀
                </button>

                <button
                  className="nav next"
                  onClick={() =>
                    setPopupImageIndex(
                      (popupImageIndex + 1) %
                      selectedProduct.images.length
                    )
                  }
                >
                  ▶
                </button>
              </>
            )}

            {/* 🔥 THUMBNAILS */}
            <div className="thumbnail-row">
              {selectedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  className={`thumb ${popupImageIndex === index ? 'active' : ''
                    }`}
                  onClick={() => setPopupImageIndex(index)}
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Products;