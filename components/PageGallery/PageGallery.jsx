/* import "./PageGallery.css";

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

// direction "left"  → normal   → 0% a -50% (se mueve a la izquierda)
// direction "right" → reverse  → -50% a 0  (se mueve a la derecha, empieza con fotos visibles)
function MarqueeRow({ images, direction, duration }) {
  const doubled = [...images, ...images];
  const animDir = direction === "right" ? "reverse" : "normal";

  return (
    <div className="marquee-row">
      <div
        className="marquee-track marquee-track--active"
        style={{
          "--dur": `${duration}s`,
          "--dir": animDir,
        }}
      >
        {doubled.map((img, i) => (
          <div className="marquee-item" key={i}>
            <img src={img.src} alt={img.alt} loading="eager" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PageGallery() {
  return (
    <div className="page-gallery">
      <MarqueeRow images={row1} direction="right" duration={40} />
      <MarqueeRow images={row2} direction="left"  duration={32} />
      <MarqueeRow images={row3} direction="right" duration={44} />
      <MarqueeRow images={row4} direction="left"  duration={36} />
    </div>
  );
}

export default PageGallery;
 */
import { memo, useState, useCallback } from "react";
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

// Arrays duplicados fuera del componente — se crean una sola vez
const doubled1 = [...row1, ...row1];
const doubled2 = [...row2, ...row2];
const doubled3 = [...row3, ...row3];
const doubled4 = [...row4, ...row4];

const MarqueeRow = memo(function MarqueeRow({ images, direction, duration }) {
  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = images.length;
  const allLoaded = loadedCount >= totalImages;

  const handleLoad = useCallback(() => {
    setLoadedCount(prev => prev + 1);
  }, []);

  const animDir = direction === "right" ? "reverse" : "normal";

  return (
    <div className="marquee-row">
      <div
        className={`marquee-track${allLoaded ? " marquee-track--active" : ""}`}
        style={{
          "--dur": `${duration}s`,
          "--dir": animDir,
          visibility: allLoaded ? "visible" : "hidden",
        }}
      >
        {images.map((img, i) => (
          <div className="marquee-item" key={i}>
            <img
              src={img.src}
              alt={img.alt}
              loading="eager"
              onLoad={handleLoad}
              onError={handleLoad}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

function PageGallery() {
  return (
    <div className="page-gallery">
      <MarqueeRow images={doubled1} direction="right" duration={40} />
      <MarqueeRow images={doubled2} direction="left"  duration={32} />
      <MarqueeRow images={doubled3} direction="right" duration={44} />
      <MarqueeRow images={doubled4} direction="left"  duration={36} />
    </div>
  );
}

export default PageGallery;
