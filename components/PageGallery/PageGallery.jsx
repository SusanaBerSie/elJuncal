import { memo, useState, useCallback, useEffect } from "react";
import "./PageGallery.css";

const row1 = [
  {src: "../../src/images/row11.jpg", alt: "Cerca con potrero verde y cielo azul"},
  {src: "../../src/images/row12.jpg", alt: "Noche de acampada y tertulia"},
  {src: "../../src/images/row13.jpg", alt: "Lago al atardecer con montañas"},
  {src: "../../src/images/row14.jpg", alt: "Flores de colores vibrantes"},
  {src: "../../src/images/row15.jpg", alt: "Cultivo de cebada entre las montañas"},
  {src: "../../src/images/row16.jpg", alt: "Nicolasa, la gatita negra de ojos verdes"},
  {src: "../../src/images/row17.jpg", alt: "Visitantes en tarde de lago y remo"},
  {src: "../../src/images/row18.jpg", alt: "Huéspedes caminando por el Valle de Camsicá"},
  {src: "../../src/images/row19.jpg", alt: "La luna brillando al atardecer"},
];
const row2 = [
  {src: "../../src/images/row21.jpg", alt: "Sofia, tu anfitriona de confianza"},
  {src: "../../src/images/row22.jpg", alt: "Lago del Juncal en mañana soleada"},
  {src: "../../src/images/row23.jpg", alt: "Huésped con patitos recién nacidos"},
  {src: "../../src/images/row24.jpeg", alt: "Mañana de abrazar vacas"},
  {src: "../../src/images/row25.jpg", alt: "Noche romántica a la luz de las estrellas"},
  {src: "../../src/images/row26.jpeg", alt: "El arcoiris acompaña el caminar vacuno"},
  {src: "../../src/images/row27.jpg", alt: "Listas para las labores del campo"},
  {src: "../../src/images/row28.jpg", alt: "Flores que dan calor al hogar"},
  {src: "../../src/images/row29.jpg", alt: "Perritos dando la bienvenida a los huéspedes" },
];
const row3 = [
  {src: "../../src/images/row31.jpg", alt: "Colibrí descansando"},
  {src: "../../src/images/row32.jpg", alt: "Vacas pastando en mañana soleada"},
  {src: "../../src/images/row33.jpg", alt: "Mañana de lago, remo y familia"},
  {src: "../../src/images/row34.jpeg", alt: "Asado familiar"},
  {src: "../../src/images/row35.jpg", alt: "Perseo, el amigo fiel"},
  {src: "../../src/images/row36.jpg", alt: "Familia anfitriona"},
  {src: "../../src/images/row37.jpg", alt: "Bienvenidos al El Juncal"},
  {src: "../../src/images/row38.jpg", alt: "Garza blanca en el lago"},
  {src: "../../src/images/row39.jpg", alt: "Vista de las montañas que rodean el Valle de Camsicá"},
];
const row4 = [
  {src: "../../src/images/row41.jpg", alt: "Noche estrellada"},
  {src: "../../src/images/row42.jpeg", alt: "Ciclopaseo con la comunidad Samaquense"},
  {src: "../../src/images/row43.jpg", alt: "Entrada a El Juncal"},
  {src: "../../src/images/row44.jpeg", alt: "Tiempo de calidad con las novillas"},
  {src: "../../src/images/row45.jpg", alt: "Patos nadando en el lago"},
  {src: "../../src/images/row46.jpg", alt: "Valle de Camsicá en mañana soleada"},
  {src: "../../src/images/row47.jpg", alt: "La fortuna de la polinización"},
  {src: "../../src/images/row48.jpg", alt: "Vista de la casa, el jardín y la zona de camping"},
  {src: "../../src/images/row49.jpg", alt: "Adorno de cumpleaños"},
];

const allImages = [...row1, ...row2, ...row3, ...row4];

const doubled1 = [...row1, ...row1];
const doubled2 = [...row2, ...row2];
const doubled3 = [...row3, ...row3];
const doubled4 = [...row4, ...row4];

// ─────────────────────────────────────────────
// MARQUEE ROW
// ─────────────────────────────────────────────
const MarqueeRow = memo(function MarqueeRow({ images, direction, duration }) {
  const [paused, setPaused] = useState(false);
  const animDir = direction === "right" ? "reverse" : "normal";

  const handleTouch = useCallback(() => {
    setPaused(prev => !prev);
  }, []);

  return (
    <div className="marquee-row" onTouchStart={handleTouch}>
      <div
        className="marquee-track marquee-track--active"
        style={{
          "--dur": `${duration}s`,
          "--dir": animDir,
         /*  animationPlayState: paused ? "paused" : "running", */
        }}
      >
        {images.map((img, i) => (
          <div className="marquee-item" key={i}>
            <img src={img.src} alt={img.alt} loading="eager" />
          </div>
        ))}
      </div>
      {paused && (
        <div className="marquee-pause-indicator">
          <span>▶ Toca para continuar</span>
        </div>
      )}
    </div>
  );
});

// ─────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      <button
        className="lightbox-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >‹</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[index].src} alt={images[index].alt} />
        <p className="lightbox-caption">{images[index].alt}</p>
      </div>
      <button
        className="lightbox-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >›</button>
    </div>
  );
}

// ─────────────────────────────────────────────
// MASONRY GRID
// ─────────────────────────────────────────────
function MasonryGrid({ images, onImageClick }) {
  const col1 = images.filter((_, i) => i % 2 === 0);
  const col2 = images.filter((_, i) => i % 2 !== 0);

  return (
    <div className="masonry-grid">
      <div className="masonry-col">
        {col1.map((img, i) => (
          <div
            className="masonry-item"
            key={i}
            onClick={() => onImageClick(i * 2)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="masonry-col">
        {col2.map((img, i) => (
          <div
            className="masonry-item"
            key={i}
            onClick={() => onImageClick(i * 2 + 1)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HOOK: ancho de ventana
// ─────────────────────────────────────────────
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

// ─────────────────────────────────────────────
// PAGE GALLERY
// ─────────────────────────────────────────────
function PageGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const width = useWindowWidth();
  const isMobile = width <= 543;

  const openLightbox  = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage     = useCallback(() =>
    setLightboxIndex(i => (i - 1 + allImages.length) % allImages.length), []);
  const nextImage     = useCallback(() =>
    setLightboxIndex(i => (i + 1) % allImages.length), []);

  return (
    <>
      {/* DESKTOP + TABLET: marquee */}
      {!isMobile && (
        <div className="page-gallery">
          <MarqueeRow images={doubled1} direction="right" duration={40} />
          <MarqueeRow images={doubled2} direction="left"  duration={32} />
          <MarqueeRow images={doubled3} direction="right" duration={44} />
          <MarqueeRow images={doubled4} direction="left" duration={36} />
        </div>
      )}

      {/* MÓVIL: masonry */}
      {isMobile && (
        <div className="mobile-gallery">
          <MasonryGrid images={allImages} onImageClick={openLightbox} />
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}

export default PageGallery;
