import React from "react";
import { Link } from "react-router-dom";
import "./Biography.css"; // shared styling


const Masters = () => {
  const masters = [
    {
      name: "Dr. Mikao Usui (1865-1926)",
      title: "Founder of Reiki",
      intro:
        "Mikao Usui, a Japanese Buddhist monk, developed the Usui System of Natural Healing after a profound spiritual experience on Mount Kurama. His teachings gave birth to modern Reiki.",
      link: "/masters/mikao-usui",
    },
    {
      name: "Dr. Chujiro Hayashi (1880-1940)",
      title: "Reiki Master & Naval Officer",
      intro:
        "A student of Usui, Hayashi systematized Reiki into practical hand positions and treatment styles. He played a key role in preserving and passing on the practice to the world.",
      link: "/masters/chujiro-hayashi",
    },
    {
      name: "Hawayo Takata (1900-1980)",
      title: "Brought Reiki to the West",
      intro:
        "Hawayo Takata, a Japanese-American woman from Hawaii, introduced Reiki to the United States. Through her teachings, Reiki spread across the Western world.",
      link: "/masters/hawayo-takata",
    },
    {
  name: "Phyllis Lei Furumoto (1948-2019)",
  title: "Reiki Grandmaster & Lineage Bearer",
  intro:
    "Granddaughter of Hawayo Takata and recognized as the Lineage Bearer of Usui Shiki Ryoho, she upheld Reiki's tradition while guiding its global evolution.",
  link: "/masters/phyllis-lei-furumoto",
},
    {
      name: "William Lee Rand",
      title: "Reiki Master & Innovator",
      intro:
        "Founder of the International Center for Reiki Training (ICRT) and developer of Karuna Reiki®, Rand has played a major role in expanding and modernizing Reiki practice worldwide.",
      link: "/masters/william-lee-rand",
    },
  ];

  return (
    <section className="biography-section">
      <div className="container">
        <h2>Reiki Masters</h2>
        <p>
          The history and spread of Reiki is deeply connected to the dedication
          of four key figures. Each contributed to the preservation,
          systematization, and worldwide spread of Reiki. Explore their lives
          and legacies below:
        </p>

        <div className="masters-grid">
          {masters.map((master, index) => (
            <div className="master-card" key={index}>
              <h3>{master.name}</h3>
              <p>
                <strong>{master.title}</strong>
              </p>
              <p>{master.intro}</p>
              <Link to={master.link} className="cta-link">
                Read Full Biography →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Masters;
