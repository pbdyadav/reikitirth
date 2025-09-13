import React, { useState } from 'react';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 'gallery1',
      icon: '🧘‍♀️',
      title: 'Reiki Session',
      description: 'Individual Reiki healing session in progress'
    },
    {
      id: 'gallery2',
      icon: '👥',
      title: 'Group Class',
      description: 'Students learning Reiki techniques together'
    },
    {
      id: 'gallery3',
      icon: '🌸',
      title: 'Healing Space',
      description: 'Our peaceful and serene healing environment'
    },
    {
      id: 'gallery4',
      icon: '🕯️',
      title: 'Meditation Room',
      description: 'Dedicated space for meditation and reflection'
    },
    {
      id: 'gallery5',
      icon: '💆‍♂️',
      title: 'Individual Session',
      description: 'One-on-one Reiki healing treatment'
    },
    {
      id: 'gallery6',
      icon: '🌿',
      title: 'Natural Setting',
      description: 'Outdoor Reiki practice in natural surroundings'
    }
  ];

  const openLightbox = (item) => {
    setSelectedImage(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // eslint-disable-next-line no-unused-vars
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  React.useEffect(() => {
    const handleKeyDownEffect = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDownEffect);
      return () => {
        document.removeEventListener('keydown', handleKeyDownEffect);
      };
    }
  }, [lightboxOpen]);

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div 
              key={item.id}
              className="gallery-item" 
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-placeholder">
                {item.icon}
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="lightbox" 
          style={{ display: 'flex' }}
          onClick={closeLightbox}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-lightbox" onClick={closeLightbox}>
              &times;
            </span>
            <div className="lightbox-image">
              <div style={{ textAlign: 'center', fontSize: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  {selectedImage?.icon}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  {selectedImage?.title}
                </div>
                <div style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: '0.8' }}>
                  {selectedImage?.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;