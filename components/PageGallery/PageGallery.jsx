import { memo, useState, useCallback, useEffect } from "react";
import "./PageGallery.css";

const row1 = [
  {src: "../../src/images/row11.jpg", alt: "Sunset over mountains"},
  {src: "../../src/images/row12.jpg", alt: "Forest trail"},
  {src: "../../src/images/row13.jpg", alt: "Tropical beach"},
  {src: "../../src/images/row14.jpg", alt: "Lavender field"},
  {src: "../../src/images/row15.jpg", alt: "City skyline"},
  {src: "../../src/images/row16.jpg", alt: "Desert dunes"},
  {src: "../../src/images/row17.jpg", alt: "Snowy mountains"},
  {src: "../../src/images/row18.jpg", alt: "Ocean waves"},
  {src: "../../src/images/row19.jpg", alt: "Aurora borealis"},
];
const row2 = [
  {src: "../../src/images/row21.jpg", alt: "Mountain lake"},
  {src: "../../src/images/row22.jpg", alt: "Forest path"},
  {src: "../../src/images/row23.jpg", alt: "Tropical waterfall"},
  {src: "../../src/images/row24.jpeg", alt: "Lavender sunset"},
  {src: "../../src/images/row25.jpg", alt: "City skyline night"},
  {src: "../../src/images/row26.jpeg", alt: "Desert sunset"},
  {src: "../../src/images/row27.jpg", alt: "Snowy village"},
  {src: "../../src/images/row28.jpg", alt: "Ocean waves aerial"},
  {src: "../../src/images/row29.jpg", alt: "Northern lights"},
];
const row3 = [
  {src: "../../src/images/row31.jpg", alt: "Ocean waves"},
  {src: "../../src/images/row32.jpg", alt: "Aurora borealis"},
  {src: "../../src/images/row33.jpg", alt: "Sahara dunes"},
  {src: "../../src/images/row34.jpeg", alt: "City skyline night"},
  {src: "../../src/images/row35.jpg", alt: "Lavender field sunset"},
  {src: "../../src/images/row36.jpg", alt: "Mountain sunrise"},
  {src: "../../src/images/row37.jpg", alt: "Tropical jungle"},
  {src: "../../src/images/row38.jpg", alt: "Winter village"},
  {src: "../../src/images/row39.jpg", alt: "Desert dunes sunset"},
];
const row4 = [
  {src: "../../src/images/row41.jpg", alt: "Turquoise waves"},
  {src: "../../src/images/row42.jpeg", alt: "Lavender provence"},
  {src: "../../src/images/row43.jpg", alt: "Mountain golden clouds"},
  {src: "../../src/images/row44.jpeg", alt: "Tropical jungle"},
  {src: "../../src/images/row45.jpg", alt: "Winter village"},
  {src: "../../src/images/row46.jpg", alt: "City skyline"},
  {src: "../../src/images/row47.jpg", alt: "Desert dunes"},
  {src: "../../src/images/row48.jpg", alt: "Ocean waves"},
  {src: "../../src/images/row49.jpg", alt: "Aurora borealis lake"},
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
          animationPlayState: paused ? "paused" : "running",
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
