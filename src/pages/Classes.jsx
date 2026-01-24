import React from 'react';

const Classes = () => {
  return (
    <section className="classes">
      <div className="container">
        <h2 className="section-title">Reiki Classes</h2>
        <div className="classes-grid">
          <div className="class-card">
            <div className="class-header">
              <h3>Reiki Level I</h3>
             {/* <div className="class-price">₹3,100</div> */}
            </div>
            <div className="class-content">
              <p className="class-duration">Duration: 2 Days</p>
              <h4>What you'll learn:</h4>
              <ul>
                <li>History and principles of Reiki</li>
                <li>Basic hand positions</li>
                <li>First degree attunement</li>
                <li>Balancing of Chakras.</li>
                <li>Self healing, and other healing techniques.</li>
                <li>Aura cleansing, Power Ball</li>
                <li>Conscious and subconscious mind.</li>
                <li>Meditations.</li>
              </ul>
              <a 
                href="https://wa.me/9926271789?text=I%20want%20to%20book%20Reiki%20Level%201%20class" 
                className="class-book-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> Book Now
              </a>
            </div>
          </div>
          
          <div className="class-card featured">
            <div className="class-header">
              <h3>Reiki Level II</h3>
              {/* <div className="class-price">₹3,500</div> */}
            </div>
            <div className="class-content">
              <p className="class-duration">Duration: 2 Days</p>
              <h4>What you'll learn:</h4>
              <ul>
                <li>Second degree attunement</li>
                <li>Sacred Reiki symbols</li>
                <li>Distance healing techniques</li>
                <li>Mental and emotional healing</li>
                <li>Professional practice guidelines</li>
                <li>Crystal healing.</li>
                <li>Dawzer healing tharapy.</li>
                <li>Past life regression.</li>
                <li>Solution of emotional problem.</li>
                <li>Self realization.</li>
              </ul>
              <a 
                href="https://wa.me/9926271789?text=I%20want%20to%20book%20Reiki%20Level%202%20class" 
                className="class-book-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> Book Now
              </a>
            </div>
          </div>
          
          <div className="class-card">
            <div className="class-header">
              <h3>Master Level III A</h3>
              {/* <div className="class-price">₹15,000</div> */}
            </div>
            <div className="class-content">
              <p className="class-duration">Duration: 4 Days</p>
              <h4>What you'll learn:</h4>
              <ul>
                <li>Seven different Attunements.</li>
                <li>Multidimensional meditaion</li>
                <li>SHAKTI-PATH DIKHSHA</li>
                <li>Master symbol and techniques</li>
                <li>Crystal detail knowledge.</li>
                <li>Karuna Reiki Attunements.</li>
                <li>Advanced healing practices</li>
                <li>Knowledge on different Spiritual Subjects.</li>
              </ul>
              <a 
                href="https://wa.me/9926271789?text=I%20want%20to%20book%20Reiki%20Master%20Level%20class" 
                className="class-book-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> Book Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="class-booking-cta">
          <h3>Ready to Start Your Reiki Journey?</h3>
          <a 
            href="https://wa.me/9926271789?text=I%20want%20to%20book%20a%20Reiki%20class" 
            className="main-cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i> For more information
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;