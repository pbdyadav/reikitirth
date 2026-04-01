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
            description: 'Reiki Ist Degree Book for all New Students only. "Contact the Grand Master for registration and course materials."',
            price: '₹ 0',
            category: 'book',
            images: [
                '/images/products/book/RIFP.png',
                '/images/products/book/RIBP.png',
                '/images/products/book/RBB.png'
            ],
            description: (
                <div className="product-description">
                    <p><strong>Reiki Ist Degree Book</strong></p>
                    <p><strong>A Comprehensive Guide for Beginners</strong></p>
                    
                    <p>Embrace the gentle, soothing energy of Reiki. This book is specially designed for new students to understand the foundation of energy healing. It serves as a wearable reminder of peace, compassion, and self-love in your daily practice.</p>

                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li><strong>History of Reiki:</strong> Learn the sacred lineage and the story of Dr. Mikao Usui.</li>
                        <li><strong>Self-Healing Techniques:</strong> Step-by-step instructions for 24 hand positions.</li>
                        <li><strong>Chakra Awareness:</strong> Detailed insights into balancing your 7 major energy centers.</li>
                        <li><strong>Daily Precepts:</strong> Spiritual principles to maintain a state of harmony.</li>
                    </ul>

                    <p><strong>Product Specifications:</strong></p>
                    <p>• Language: Hindi <br />
                    • Use: Self-treatment and student training<br />
                    • Style: Detailed Handbook</p>
                </div>
            )
        },
        {
            id: 2,
            name: 'Reiki IInd Degree Book',
            description: 'Reiki IInd Degree Book for all New Students only. "Contact the Grand Master for registration and course materials."',
            price: '₹ 0',
            category: 'book',
            images: [
                '/images/products/book/RIIFP.png',
                '/images/products/book/RIIBP.png',
                '/images/products/book/RBB.png'
            ],
            description: (
                <div className="product-description">
                    <p><strong>Reiki IInd Degree Book</strong></p>
                    <p><strong>Advanced Healing & Sacred Symbols</strong></p>
                    
                    <p>Take your spiritual journey to a deeper level. This book introduces the powerful symbols of Reiki, allowing you to amplify your healing energy and perform distance healing regardless of time or space.</p>

                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li><strong>Sacred Symbols:</strong> Deep dive into Cho Ku Rei, Sei Hei Ki, and Hon Sha Ze Sho Nen.</li>
                        <li><strong>Distance Healing:</strong> Professional protocols to send energy to anyone, anywhere.</li>
                        <li><strong>Mental & Emotional Clearing:</strong> Techniques to dissolve emotional wounds and fears.</li>
                        <li><strong>Environment Protection:</strong> Use symbols to charge your home or workspace with positive energy.</li>
                    </ul>

                    <p><strong>Product Specifications:</strong></p>
                    <p>• Prerequisite: Must have Reiki Level 1<br />
                    • Language: Hindi <br />
                    • Style: Professional Practitioner Guide</p>
                </div>
            )
        },
        {
            id: 3,
            name: 'Prosperity Box (समृद्धि बॉक्स)',
            description: 'A complete Laxmi Pujan Kit featuring gold-plated idols of Ganesha, Laxmi, Saraswati, and Kuber. Includes spiritual essentials like Gomti Chakra, Shripal, and a sacred Rudraksha for home prosperity.',
            price: '₹x,xxx',
            category: 'box',
            images: [
                '/images/products/1.png',
                '/images/products/4.png',
                '/images/products/2.png',
                '/images/products/3.png'
            ],
            description: (
                <div className="product-description">
                    <p><strong>समृद्धि बॉक्स - Divine Prosperity Kit</strong></p>
                    <p><strong>A Complete Laxmi Pujan Kit for Home Harmony</strong></p>
                    
                    <p>Invite wealth, wisdom, and divine protection into your home. This expertly curated Prosperity Box features a collection of sacred items traditionally used to attract positive vibrations and the blessings of Goddess Laxmi and Lord Ganesha.</p>

                    <p><strong>Key Components & Features:</strong></p>
                    <ul>
                        <li><strong>Gold-Plated Idols:</strong> Exquisitely crafted idols of Lord Ganesha, Goddess Laxmi, Goddess Saraswati, and Lord Kuber.</li>
                        <li><strong>Spiritual Essentials:</strong> Includes authentic Gomti Chakra, Shripal (Mini Coconut), and a sacred Rudraksha for spiritual grounding.</li>
                        <li><strong>Auspicious Symbols:</strong> Features the Golden Key of Success and a Tortoise (Kachua) for stability and longevity.</li>
                        <li><strong>Diwali Special:</strong> An ideal choice for Diwali Pujan or a thoughtful spiritual gift for housewarmings and business openings.</li>
                    </ul>

                    <p><strong>Benefits of the Prosperity Box:</strong></p>
                    <p>• Attracts Financial Stability and Success.<br />
                    • Removes obstacles and brings mental peace.<br />
                    • Harmonizes the energy of your living or workspace.</p>
                </div>
            )
        },
        {
            id: 4,
            name: 'Antahkaran Pillow cover (अंतःकरण तकिया कवर)',
            price: '₹xxx',
            category: 'antahkaran',
            images: [
                '/images/products/pillow with bed.png',
                '/images/products/pillow.png'
            ],
            description: (
                <div className="product-description">
                    <p><strong>Antahkaran Pillow Cover — Healing & Peace</strong></p>
                    <p><strong>Sacred Geometry for Restorative Sleep</strong></p>
                    
                    <p>Transform your sleep into a healing experience. This high-quality white pillow cover features the ancient Antahkaran symbol, a powerful healing and meditation tool used for thousands of years in Tibet and China to bridge the physical and spiritual self.</p>

                    <p><strong>Key Features & Benefits:</strong></p>
                    <ul>
                        <li><strong>Sacred Symbolism:</strong> Features the Antahkaran symbol in the center, known for its ability to neutralize negative energy and balance the chakras.</li>
                        <li><strong>Reiki Enhancement:</strong> Specifically designed for Reiki practitioners and patients to amplify healing energy during rest.</li>
                        <li><strong>Premium Quality:</strong> Crafted from soft, breathable white fabric that ensures comfort while maintaining the purity of the sacred design.</li>
                        <li><strong>Aesthetic Appeal:</strong> A minimalist and clean look that fits perfectly in any meditation room or bedroom.</li>
                    </ul>

                    <p><strong>How to Use:</strong></p>
                    <p>• Use during sleep to promote vivid dreams and peaceful rest.<br />
                    • Place in your healing room to maintain a high-vibrational environment.<br />
                    • Ideal for daily meditation and energy clearing practices.</p>
                </div>
            )
        },
        {
            id: 5,
            name: 'Rose Quartz Crystal Bracelet (रोज क्वार्ट्ज क्रिस्टल ब्रेसलेट)',
            price: '₹x,xxx',
            category: 'crystel',
            images: ['/images/products/crystal/1_1.png',
                '/images/products/crystal/1_2.png',
                '/images/products/crystal/1.jpeg'
            ],
            description: (
                <div className="product-desc-wrapper">
                    <p><strong>The Stone of Universal Love</strong></p>

                    <p><strong>Product Overview:</strong><br />
                        Embrace the gentle, soothing energy of our Pink Rose Quartz Bracelet. Crafted with high-quality, polished natural crystal beads, this is a wearable reminder of peace, compassion, and self-love.</p>

                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li><strong>Genuine Natural Crystals:</strong> Authentic rose quartz with unique natural inclusions.</li>
                        <li><strong>Hand-Polished Beads:</strong> Expertly rounded for a smooth, comfortable finish.</li>
                        <li><strong>Durable Elastic Design:</strong> High-tensile stretch cord for a perfect fit.</li>
                    </ul>

                    <p><strong>Metaphysical Benefits:</strong></p>
                    <ul>
                        <li><strong>Emotional Healing:</strong> Helps dissolve emotional wounds and fears.</li>
                        <li><strong>Heart Chakra:</strong> Opens the spirit to all forms of love.</li>
                        <li><strong>Stress Relief:</strong> Soothes the nervous system.</li>
                    </ul>

                    <p><strong>Specifications:</strong><br />
                        • Material: Natural Rose Quartz<br />
                        • Bead Size: 8mm<br />
                        • Style: Unisex / Minimalist</p>
                </div>
            )
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