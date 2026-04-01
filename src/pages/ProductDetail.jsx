import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const [activeImage, setActiveImage] = useState(0);
    const [zoomStyle, setZoomStyle] = useState({});
    const navigate = useNavigate();

    // SAME PRODUCTS DATA (copy from Products.jsx)
    const products = [
        {
            id: 1,
            name: 'Reiki Ist Degree Book',
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
            name: 'Reiki IInd Degree Book',
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
            name: 'समृद्धि बॉक्स',
            description: 'समृद्धि बॉक्स - लक्ष्मी पूजन सामग्री (दिवाली विशेष).',
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

    const handleZoom = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();

        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setZoomStyle({
            transformOrigin: `${x}% ${y}%`,
            transform: "scale(2)"
        });
    };

    const resetZoom = () => {
        setZoomStyle({
            transform: "scale(1)"
        });
    };
    const product = products.find(p => p.id === Number(id));

    if (!product) return <h2>Product not found</h2>;

    return (

        <div className="detail-container">
            <button
                onClick={() => navigate("/products")}
                style={{
                    marginBottom: "20px",
                    padding: "8px 15px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#9b59b6",
                    color: "#fff",
                    cursor: "pointer"
                }}
            >
                ← Back to Products
            </button>
            <div className="detail-grid">

                {/* LEFT - IMAGES */}
                <div className="detail-images">
                    <div className="zoom-container">
                        <img
                            src={product.images[activeImage]}
                            alt="main"
                            className="main-image"
                            style={zoomStyle}
                            onMouseMove={handleZoom}
                            onMouseLeave={resetZoom}
                        />
                    </div>

                    <div className="thumbnail-row">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="thumb"
                                className={`thumb ${activeImage === index ? 'active' : ''}`}
                                onClick={() => setActiveImage(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT - INFO */}
                <div className="detail-info">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3 className="product-price">{product.price}</h3>

                    <a
                        href={`https://wa.me/9926271789?text=I want ${product.name}`}
                        className="buy-btn"
                        target="_blank"
                    >
                        Order on WhatsApp
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;