import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./WhatIsReiki.css";

const chakraData = [
  { name: "Crown", image: "/images/chakras/crown.gif", link: "/chakras/crown" },
  { name: "Third Eye", image: "/images/chakras/third-eye.gif", link: "/chakras/third-eye" },
  { name: "Throat", image: "/images/chakras/throat.gif", link: "/chakras/throat" },
  { name: "Heart", image: "/images/chakras/heart.gif", link: "/chakras/heart" },
  { name: "Solar Plexus", image: "/images/chakras/solar-plexus.gif", link: "/chakras/solar-plexus" },
  { name: "Sacral", image: "/images/chakras/sacral.gif", link: "/chakras/sacral" },
  { name: "Root", image: "/images/chakras/root.gif", link: "/chakras/root" }
];

const WhatIsReiki = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".cards_inner", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="what-is-reiki page-section">
      <div className="container">
        <h2 className="section-title">What is Reiki?</h2>

        <div className="glass-card intro">
          <h3>The Ancient Art of Energy Healing</h3>
          <p>
            <strong>Reiki</strong> is a gentle Japanese technique for stress reduction,
            relaxation, and natural healing. The word itself comes from two parts:
            <strong> “Rei”</strong> (universal) and <strong>“Ki”</strong> (life energy).
            Together, it means “universal life energy.”
          </p>
          <p>
            <strong>रेकी </strong>तनाव कम करने, आराम देने और प्राकृतिक उपचार के लिए एक सौम्य जापानी तकनीक है। 
            यह शब्द स्वयं दो भागों से मिलकर बना है: <strong>"रेई" </strong>(सार्वभौमिक) और <strong>"की" </strong> (जीवन ऊर्जा)। कुल मिलाकर, इसका अर्थ है "सार्वभौमिक जीवन ऊर्जा"।
          </p>
          <p>
            This practice is based on the idea that an unseen life force energy flows
            through all of us. When this energy is balanced, we feel healthy and at peace;
            when it is low or blocked, we are more likely to feel stressed or fall sick.
          </p>
          <p>यह अभ्यास इस विचार पर आधारित है कि एक अदृश्य जीवन शक्ति ऊर्जा हम सभी में प्रवाहित होती है। जब यह ऊर्जा संतुलित होती है, 
            तो हम स्वस्थ और शांत महसूस करते हैं; जब यह कम या अवरुद्ध होती है, तो हमारे तनावग्रस्त होने या बीमार पड़ने की संभावना अधिक होती है।</p>
          

          <h3>History of Reiki</h3>
          <p>
            Reiki was rediscovered in the early 20th century by Japanese Buddhist
            <strong> Mikao Usui</strong>. Since 1922, it has been practiced worldwide in
            hospitals, wellness centers, and homes. Reiki has adapted into various cultural
            contexts but has always remained centered on the idea of channeling universal
            energy for healing.
          </p>
          <p>
            जापानी बौद्ध मिकाओ उसुई द्वारा 1922 में विकसित रेकी को तब से दुनिया भर में विभिन्न
            रूपों में अपनाया गया है। "रेकी" शब्द जापानी शब्दों "रेई" (सार्वभौमिक) और
            "की" (जीवन ऊर्जा) से मिलकर बना है।
          </p>

          <h3>Benefits of Reiki</h3>
          <p>
            Reiki works on the <strong>physical, emotional, mental, and spiritual</strong>{" "}
            levels. Many people who receive Reiki report the following benefits:
          </p>
          <p>रेकी <strong>शारीरिक, भावनात्मक, मानसिक और आध्यात्मिक</strong> स्तरों पर काम करती है। रेकी प्राप्त करने वाले कई लोग निम्नलिखित लाभों की रिपोर्ट करते हैं:</p>
          <ul className="benefits-list">
            <li><strong>Stress Reduction & Relaxation</strong> - Calms the mind and body. : <strong>तनाव में कमी और विश्राम</strong> - मन और शरीर को शांत करता है।</li>
            <li><strong>Accelerates Natural Healing</strong> - Supports recovery after illness or surgery. : <strong>प्राकृतिक उपचार में तेज़ी लाता है </strong>- बीमारी या सर्जरी के बाद स्वास्थ्य लाभ में सहायक होता है।</li>
            <li><strong>Balances Chakras</strong> - Restores harmony to energy centers. : <strong>चक्रों को संतुलित करता है </strong>- ऊर्जा केंद्रों में सामंजस्य स्थापित करता है।</li>
            <li><strong>Improves Sleep</strong> - Encourages deep, restorative rest. : <strong>नींद में सुधार करता है</strong> - गहन, पुनर्स्थापनात्मक विश्राम को प्रोत्साहित करता है।</li>
            <li><strong>Emotional Healing</strong> - Releases tension, fear, and anxiety. : <strong>भावनात्मक उपचार</strong> - तनाव, भय और चिंता को दूर करता है।</li>
            <li><strong>Spiritual Growth</strong> - Increases self-awareness and intuition. : <strong>आध्यात्मिक विकास</strong> - आत्म-जागरूकता और अंतर्ज्ञान को बढ़ाता है।</li>
            <li><strong>Versatility</strong> - Can be used on people, animals, and even material objects. : <strong>बहुमुखी प्रतिभा </strong>- इसका उपयोग लोगों, जानवरों और यहाँ तक कि भौतिक वस्तुओं पर भी किया जा सकता है।</li>
          </ul>

          <h3>The Reiki Session Experience</h3>
          <p>
            A typical Reiki session lasts 75 minutes. The recipient remains fully clothed
            and lies comfortably while the practitioner gently places hands on or above
            the body. Some feel warmth, tingling, or waves of energy, while others simply
            experience deep peace and relaxation.
          </p>
          <p>एक सामान्य रेकी अवधि 75 मिनट तक चलती है। प्राप्तकर्ता पूरी तरह से कपड़े पहने रहता है और आराम से लेटा रहता है, 
            जबकि चिकित्सक धीरे से उसके शरीर पर या उसके ऊपर हाथ रखता है। कुछ लोगों को गर्मी, झुनझुनी या ऊर्जा की लहरें महसूस होती हैं, 
            जबकि अन्य को बस गहरी शांति और विश्राम का अनुभव होता है।</p>
          <p>
            After a session, people often feel lighter, refreshed, and more balanced. The
            effects may last several days, and regular sessions can bring long-term benefits.
          </p>
          <p>एक अवधि के बाद, लोग अक्सर हल्का, तरोताजा और अधिक संतुलित महसूस करते हैं। इसका प्रभाव कई दिनों तक रह सकता है, 
            और नियमित सत्र दीर्घकालिक लाभ प्रदान कर सकते हैं।</p>

          <h3>Reiki and the Chakras</h3>
          <p>
            Reiki is closely connected to the <strong>Seven Chakras</strong>, or energy
            centers of the body. Each chakra is linked with physical, emotional, and
            spiritual well-being. By balancing these centers, Reiki restores the natural
            flow of energy and leaves you feeling grounded, peaceful, and aligned.
          </p>
          <p>रेकी शरीर के <strong>सात चक्रों </strong>या ऊर्जा केंद्रों से गहराई से जुड़ी है। प्रत्येक चक्र शारीरिक, भावनात्मक और आध्यात्मिक कल्याण से जुड़ा है। 
            इन केंद्रों को संतुलित करके, रेकी ऊर्जा के प्राकृतिक प्रवाह को बहाल करती है और आपको स्थिर, शांत और संतुलित महसूस कराती है।</p>

          <h3>Who Can Benefit from Reiki?</h3>
          <p>
            Reiki is <strong>safe for everyone</strong>—children, adults, elderly, even
            animals and plants. It is especially helpful for those coping with stress,
            chronic pain, or emotional challenges. Even healthy individuals use Reiki
            as a way to maintain balance and well-being.
          </p>
          <p>रेकी <strong>सभी के लिए सुरक्षित है</strong>—बच्चों, वयस्कों, बुज़ुर्गों, यहाँ तक कि जानवरों और पौधों के लिए भी। यह विशेष रूप से उन लोगों के लिए मददगार है 
            जो तनाव, पुराने दर्द या भावनात्मक चुनौतियों से जूझ रहे हैं। स्वस्थ व्यक्ति भी संतुलन और स्वास्थ्य बनाए रखने के लिए रेकी का उपयोग करते हैं।</p>

          <h3>Reiki as a Way of Life</h3>
          <p>
            For many practitioners, Reiki is not just a healing method but a way of life.
            Dr. Usui shared five guiding principles for living mindfully:
          </p>
          <p>कई चिकित्सकों के लिए, रेकी केवल एक उपचार पद्धति नहीं, बल्कि जीवन जीने का एक तरीका है। 
            डॉ. उसुई ने सचेतन जीवन जीने के पाँच मार्गदर्शक सिद्धांत साझा किए:</p>
          <ul className="principles-list">
            <li>Just for today, I will not be angry. : आज के लिए, मैं क्रोधित नहीं होऊँगा।</li>
            <li>Just for today, I will not worry. : आज के लिए, मैं चिंता नहीं करूँगा।</li>
            <li>Just for today, I will be grateful. : आज के लिए, मैं कृतज्ञ रहूँगा।</li>
            <li>Just for today, I will do my work honestly. : आज के लिए, मैं अपना काम ईमानदारी से करूँगा।</li>
            <li>Just for today, I will be kind to every living thing. : आज के लिए, मैं हर जीवित प्राणी के प्रति दयालु रहूँगा।</li>
          </ul>

          <h3>Conclusion</h3>
          <p>
            Reiki is a profound yet simple practice that connects us to the universal
            energy of life. It offers a safe, nurturing space for healing, self-discovery,
            and transformation. Whether you seek stress relief, emotional support, or a
            deeper sense of peace, Reiki can help you reconnect with balance and harmony
            in every part of life.
          </p>
          <p>रेकी एक गहन किन्तु सरल अभ्यास है जो हमें जीवन की सार्वभौमिक ऊर्जा से जोड़ता है। यह उपचार, 
            आत्म-खोज और परिवर्तन के लिए एक सुरक्षित और पोषणकारी वातावरण प्रदान करता है। चाहे आप तनाव से मुक्ति, भावनात्मक सहारा, 
            या गहरी शांति चाहते हों, रेकी आपको जीवन के हर पहलू में संतुलन और सामंजस्य के साथ फिर से जुड़ने में मदद कर सकती है।</p>
        </div>

        {/* Chakra Slider */}
        <div className="cards" ref={sliderRef}>
          <div className="cards_inner">
            {chakraData.map((chakra, index) => (
              <Link key={index} to={chakra.link} className="chakra-card">
                <img src={chakra.image} alt={chakra.name} className="card__img" />
                <h4 className="card__title">{chakra.name}</h4>
                <span className="cta">Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsReiki;
