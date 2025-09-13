import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ChakraDetail.css";
import CHAKRA_DATA from '../data/chakraDataNew';

export default function ChakraDetail() {
  const { slug } = useParams();
  const chakra = CHAKRA_DATA[slug];

  if (!chakra) {
    return (
      <div className="chakra-detail container glass-card">
        <h2>Chakra not found</h2>
        <Link className="back-link" to="/what-is-reiki">
          ← Back to What is Reiki
        </Link>
      </div>
    );
  }

  return (
    <section className="chakra-detail container glass-card">
      <Link className="back-link" to="/what-is-reiki">
        ← Back
      </Link>

      <div className="chakra-detail__header">
        <img src={chakra.img} alt={chakra.name} className="chakra-detail__img" />
        <div>
          <h1 style={{ color: chakra.color }}>{chakra.name}</h1>
          <div className="chakra-detail__desc">
          </div>
        </div>
      </div>

      <div className="chakra-detail__body">
        <h3>Details</h3>
        {/* Long bilingual description goes here */}
  <div className="chakra-detail__desc">
  <h4>Description :</h4>
  <p>{chakra.description_en}</p>

  <h4>विवरण :</h4>
  <p>{chakra.description_hi}</p>
</div>
        <p><strong>Position:</strong> {chakra.details.position}</p>
        <p><strong>Color:</strong> {chakra.details.color}</p>
        <p><strong>Element:</strong> {chakra.details.element}</p>
        <p><strong>Related to:</strong> {chakra.details.relatedTo}</p>
        <p><strong>Dimension:</strong> {chakra.details.dimension}</p>
        <p><strong>Why activate:</strong> {chakra.details.whyActivate}</p>

        <h3>Signs of Imbalance</h3>
        <ul>
          {chakra.imbalance.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>

        <h3>Ways to Balance</h3>
        <ul>
          {chakra.balance.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>

        {chakra.affirmations && chakra.affirmations.length > 0 && (
          <>
            <h3>Affirmations</h3>
            <ul>
              {chakra.affirmations.map((line, idx) => (
                <li key={idx}>• {line}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
