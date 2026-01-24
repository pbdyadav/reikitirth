import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero home-hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Hn1.webp)`
          }}
        >
          
          {/* Floating Circles */}
          <div className="floating-circles">
            <div
              className="circle c1"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Dr_Mikao_Usui.webp)` }}
            ></div>
            <div
              className="circle c2"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Guru_ji.webp)` }}
            ></div>
            <div
              className="circle c3"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Guru_Maa1.webp)` }}
            ></div>
            <div
              className="circle c4"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Hawayo_Takata.webp)` }}
            ></div>
            <div
              className="circle c5"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Dr_Chujiro_Hayashi.webp)` }}
            ></div>
            <div
              className="circle c6"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Phyllis_Lei_Furumoto.webp)` }}
            ></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Life Through Reiki Healing
          </h1>
          <p className="hero-subtitle">Experience the ancient art of Reiki</p>
          <p className="hero-subtitle">balance, peace, and energy restoration.</p>
          <a
            href="https://wa.me/9926271789?text=I%20want%20to%20book%20a%20Reiki%20class"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i> Book a Class via WhatsApp
          </a>
        </div>

        {/* Benefit Cards */}
        <div className="hero-benefits">
  <div className="benefit-card">
    <img src={`${process.env.PUBLIC_URL}/images/1.webp`} alt="Stress Relief" />
    <h3>Stress Relief</h3>
    <p>Experience deep relaxation and stress reduction.</p>
  </div>
  <div className="benefit-card">
    <img src={`${process.env.PUBLIC_URL}/images/2.webp`} alt="Energy Balance" />
    <h3>Energy Balance</h3>
    <p>Balance your energy and restore harmony.</p>
  </div>
  <div className="benefit-card">
    <img src={`${process.env.PUBLIC_URL}/images/3.webp`} alt="Inner Peace" />
    <h3>Inner Peace</h3>
    <p>Find tranquility and emotional balance.</p>
  </div>
</div>
      </section>

      {/* Why Choose Reiki Tirth Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Why Choose Reiki Tirth?</h2>
          <div className="mission-vision">
            <div className="mission">
              <h3>🌎 Always Offline Class</h3>
              <p>
                Experience the true essence of Reiki through 100% offline classes
                for better connection and practical learning.
              </p>
            </div>
            <div className="vision">
              <h3>🌱 Authentic Training</h3>
              <p>
                We follow the original Usui System of Reiki, ensuring you receive
                authentic and powerful healing knowledge.
              </p>
            </div>
            <div className="vision">
              <h3>🏆 Experienced Masters</h3>
              <p>
                Learn from certified Reiki masters with years of experience in
                healing and teaching traditional Reiki techniques.
              </p>
            </div>
            <div className="mission">
              <h3>💫 Personalized Approach</h3>
              <p>
                Each student receives individual attention and guidance tailored
                to their unique healing journey and spiritual growth.
              </p>
            </div>
            <div className="vision">
              <h3>🤝 Ongoing Support</h3>
              <p>
                Join our community of healers with continued support, practice
                sessions, and advanced training opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
