import "./Services.css";
import greenArea1 from "../../src/images/greenArea1.jpg";
import greenArea2 from "../../src/images/greenArea2.jpg";
import greenArea3 from "../../src/images/greenArea3.jpg";
import greenArea4 from "../../src/images/greenArea4.jpg";
import greenArea5 from "../../src/images/greenArea5.jpg";
import lounge1 from "../../src/images/lounge1.jpg";
import lounge2 from "../../src/images/lounge2.jpg";
import lounge3 from "../../src/images/lounge3.jpg";
import lounge4 from "../../src/images/lounge4.jpg";
import courtyard1 from "../../src/images/courtyard1.jpg";
import courtyard2 from "../../src/images/courtyard2.jpg";
import courtyard3 from "../../src/images/courtyard3.jpg";
import courtyard4 from "../../src/images/courtyard4.jpg";
import courtyard5 from "../../src/images/courtyard5.jpg";
import courtyard6 from "../../src/images/courtyard6.jpg";
import courtyard7 from "../../src/images/courtyard7.jpg";
import diningRoom1 from "../../src/images/diningRoom1.jpg";
import diningRoom2 from "../../src/images/diningRoom2.jpg";
import diningRoom3 from "../../src/images/diningRoom3.jpg";
import diningRoom4 from "../../src/images/diningRoom4.jpg";
import diningRoom5 from "../../src/images/diningRoom5.jpg";
import diningRoom6 from "../../src/images/diningRoom6.jpg";
import diningRoom7 from "../../src/images/diningRoom7.jpg";
import diningRoom8 from "../../src/images/diningRoom8.jpg";
import diningRoom9 from "../../src/images/diningRoom9.jpg";
import bathroom1 from "../../src/images/bathroom1.jpg";
import bathroom2 from "../../src/images/bathroom2.jpg";
import bathroom3 from "../../src/images/bathroom3.jpg";
import bathroom4 from "../../src/images/bathroom4.jpg";
import bathroom5 from "../../src/images/bathroom5.jpg";
import bathroom6 from "../../src/images/bathroom6.jpg";
import kittchen1 from "../../src/images/kittchen1.jpg";
import kittchen2 from "../../src/images/kittchen2.jpg";
import kittchen3 from "../../src/images/kittchen3.jpg";
import kitchenIcon from "../../src/images/iconKitchen.png";
import livingIcon from "../../src/images/iconLiving.png";
import toiletIcon from "../../src/images/iconToilet.png";
import flowerIcon from "../../src/images/iconflower.png";
import houseIcon from "../../src/images/iconHouse.png";
import { useState, useEffect } from "react";

function Services() {
  const services = [
    {
      id: 0,
      name: "Zonas verdes",
      icon: flowerIcon,
      images: [greenArea1, greenArea2, greenArea3, greenArea4, greenArea5],
    },
    {
      id: 1,
      name: "Sala",
      icon: livingIcon,
      images: [lounge1, lounge2, lounge3, lounge4],
    },
    {
      id: 2,
      name: "Cocina y comedor",
      icon: kitchenIcon,
      images: [
        kittchen1,
        kittchen2,
        kittchen3,
        diningRoom1,
        diningRoom2,
        diningRoom3,
        diningRoom4,
        diningRoom5,
        diningRoom6,
        diningRoom7,
        diningRoom8,
        diningRoom9,
      ],
    },
    {
      id: 3,
      name: "Patio",
      icon: houseIcon,
      images: [
        courtyard1,
        courtyard2,
        courtyard3,
        courtyard4,
        courtyard5,
        courtyard6,
        courtyard7,
      ],
    },
    {
      id: 4,
      name: "Baños",
      icon: toiletIcon,
      images: [
        bathroom1,
        bathroom2,
        bathroom3,
        bathroom4,
        bathroom5,
        bathroom6,
      ],
    },
  ];

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const intervalService = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % services[activeServiceIndex].images.length
      );
    }, 3000);

    return () => clearInterval(intervalService);
  }, [activeServiceIndex]);

  // Reorganizar servicios según el tamaño de pantalla
  const getOrderedServices = () => {
    const ordered = [];
    
    if (isMobile) {
      // MÓVIL: El servicio activo va PRIMERO (posición 1 = arriba)
      ordered.push({ ...services[activeServiceIndex], originalIndex: activeServiceIndex, isActive: true });
      
      // Los demás servicios llenan las posiciones 2-5 (abajo en cuadrícula 2x2)
      for (let i = 0; i < services.length; i++) {
        if (i !== activeServiceIndex) {
          ordered.push({ ...services[i], originalIndex: i, isActive: false });
        }
      }
    } else {
      // DESKTOP: El servicio activo va ÚLTIMO (posición 5 = centro)
      // Los servicios NO activos van en posiciones 1-4 (esquinas)
      for (let i = 0; i < services.length; i++) {
        if (i !== activeServiceIndex) {
          ordered.push({ ...services[i], originalIndex: i, isActive: false });
        }
      }
      
      // El servicio activo al final
      ordered.push({ ...services[activeServiceIndex], originalIndex: activeServiceIndex, isActive: true });
    }
    
    return ordered;
  };

  const orderedServices = getOrderedServices();

  return (
    <div className="services" id="servicios">
      <div className="services__container">
        {orderedServices.map((service) => (
          <div
            key={service.id}
            className={`services__item ${
              service.isActive ? "services__item--active" : ""
            }`}
            onClick={() => {
              setActiveServiceIndex(service.originalIndex);
              setCurrentImageIndex(0);
            }}
          >
            {!service.isActive ? (
              <div className="services__item-content">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="services__item-icon"
                />
                <span className="services__item-name">{service.name}</span>
              </div>
            ) : (
              <>
                <div
                  className="services__carousel-image"
                  style={{
                    backgroundImage: `url(${service.images[currentImageIndex]})`,
                  }}
                />

                <div className="services__carousel-overlay">
                  <h3 className="services__carousel-title">{service.name}</h3>

                  <div className="services__carousel-indicators">
                    <span>Ver más</span>
                    <div className="services__carousel-dots">
                      {service.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          className={`services__carousel-dot ${
                            currentImageIndex === imgIndex
                              ? "services__carousel-dot--active"
                              : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(imgIndex);
                          }}
                          aria-label={`Ver imagen ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
