import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // optional if you have styling

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Reiki Tirth</h2>
        <div className="about-content">
          {/* Mission & Vision */}
          <div className="about-text">
            <p>
              Welcome to Reiki Tirth, your sanctuary for healing and spiritual growth. 
              We are dedicated to sharing the ancient wisdom of Reiki healing, helping 
              individuals discover their inner power and achieve holistic wellness. 
            </p>
            <p>
              (रेकी तीर्थ में आपका स्वागत है, जो आपके उपचार और आध्यात्मिक विकास का केंद्र है। 
              हम रेकी उपचार के प्राचीन ज्ञान को साझा करने, लोगों को उनकी आंतरिक शक्ति को 
              खोजने और समग्र स्वास्थ्य प्राप्त करने में मदद करने के लिए समर्पित हैं।)
            </p>

            <div className="mission-vision">
              <div className="mission">
                <h3>Our Mission</h3>
                <p>
                  To make Reiki healing accessible to everyone, fostering a community 
                  of healers who can transform lives through the power of universal energy.
                </p>
              </div>
              <div className="vision">
                <h3>Our Vision</h3>
                <p>
                  To create a world where healing energy flows freely, bringing peace, 
                  harmony, and wellness to all beings.
                </p>
              </div>
            </div>
          </div>

          {/* Guru Parampara */}
          <div className="guru-parampara">
            <h3>Reiki Guru Parampara</h3>
            <div className="masters-timeline">
              <div className="master">
                <div className="master-info">
                  <h4>Dr. Mikao Usui (1865-1926)</h4>
                  <p><strong>Founder of Reiki</strong></p>
                  <p>
                    Dr. Mikao Usui developed the Reiki system of natural healing in Japan. 
                    After a spiritual experience on Mount Kurama, he founded the Usui System 
                    of Reiki Healing.
                  </p>
                  <Link to="/masters/mikao-usui" className="read-more-btn">Read More</Link>
                </div>
              </div>

              <div className="master">
                <div className="master-info">
                  <h4>Dr. Chujiro Hayashi (1880-1940)</h4>
                  <p><strong>Reiki Master & Naval Officer</strong></p>
                  <p>
                    A student of Usui, Dr. Hayashi established the first Reiki clinic and 
                    developed the hand positions still used today.
                  </p>
                  <Link to="/masters/chujiro-hayashi" className="read-more-btn">Read More</Link>
                </div>
              </div>

              <div className="master">
                <div className="master-info">
                  <h4>Hawayo Takata (1900-1980)</h4>
                  <p><strong>Brought Reiki to the West</strong></p>
                  <p>
                    Born in Hawaii, she brought Reiki from Japan to the Western world, 
                    establishing the foundation for modern Reiki practice.
                  </p>
                  <Link to="/masters/hawayo-takata" className="read-more-btn">Read More</Link>
                </div>
              </div>

                <div className="master">
                <div className="master-info">
                  <h4>Phyllis Lei Furumoto (1948-2019)</h4>
                  <p><strong>Reiki Grandmaster</strong></p>
                  <p>
                    Granddaughter of Hawayo Takata and recognized Grandmaster who maintained 
                    the traditional lineage while supporting Reiki's evolution and growth worldwide.
                  </p>
                  <Link to="/masters/phyllis-lei-furumoto" className="read-more-btn">Read More</Link>
                </div>
              </div>

              <div className="master">
                <div className="master-info">
                  <h4>William Lee Rand</h4>
                  <p><strong>Reiki Master & Innovator</strong></p>
                  <p>
                    Modern Reiki Master who has contributed significantly to Reiki 
                    education and research, founding the International Center for Reiki Training.
                  </p>
                  <Link to="/masters/william-lee-rand" className="read-more-btn">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
