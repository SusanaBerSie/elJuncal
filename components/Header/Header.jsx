import "./header.css";
import headerImage from "../../src/images/headerImage.jpg";
import headerVideo from "../../src/images/video.mp4";
import { useState } from "react";

function Header() {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <header className="header">
      {!videoEnded ? (
        <video
          className="header__video"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src={headerVideo} type="video/mp4" /> Tu navegador no soporta
          videos.
        </video>
      ) : (
        <>
          <img src={headerImage} alt="El Juncal" className="header__image" />
          <div className="header__overlay">
            <p className="header__subtitle">EL</p>
            <h1 className="header__title">JUNCAL</h1>
            <p className="header__subtitle">POSADA RURAL</p>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
