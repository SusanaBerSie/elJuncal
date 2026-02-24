import "./Rooms.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import flowerImage from "../../src/images/logoFlor.png";
import buttonLogo from "../../src/images/buttonLogo.png";
import room1Photo1 from "../../src/images/room1Photo1.jpg";
import room1Photo2 from "../../src/images/room1Photo2.jpg";
import room1Photo3 from "../../src/images/room1Photo3.jpg";
import room2Photo1 from "../../src/images/room2Photo1.jpg";
import room2Photo2 from "../../src/images/room2Photo2.jpg";
import room2Photo3 from "../../src/images/room2Photo3.jpg";
import room3Photo1 from "../../src/images/room3Photo1.jpg";
import room3Photo2 from "../../src/images/room3Photo2.jpg";
import room3Photo3 from "../../src/images/room3Photo3.jpg";
import room4Photo1 from "../../src/images/room4Photo1.jpg";
import room4Photo2 from "../../src/images/room4Photo2.jpg";
import room4Photo3 from "../../src/images/room4Photo3.jpg";
import { useState, useEffect } from "react";

function Rooms() {
  const rooms = [
    {
      id: 0,
      name: "Margarita",
      description: "1 cama semidoble",
      images: [room1Photo1, room1Photo2, room1Photo3],
      amenities: ["Sofa cama", "Armario, escritorio"],
      complements: "Incluye desayuno",
      price: "70.000 COP/noche",
    },
    {
      id: 1,
      name: "Cactus",
      description: "2 camas dobles",
      images: [room2Photo1, room2Photo2, room2Photo3],
      amenities: ["Silla auxiliar", "Tocador"],
      complements: "Incluye desayuno",
      price: "70.000 COP/noche",
    },
    {
      id: 2,
      name: "Rosa",
      description: "1 cama doble + 1 cama semidoble",
      images: [room3Photo1, room3Photo2, room3Photo3],
      amenities: ["Silla auxiliar", "Espejo de pared"],
      complements: "Incluye desayuno",
      price: "70.000 COP/noche",
    },
    {
      id: 3,
      name: "Girasol",
      description: "2 camas dobles",
      images: [room4Photo1, room4Photo2, room4Photo3],
      amenities: ["Silla auxiliar", "Vista al jardín"],
      complements: "Incluye desayuno",
      price: "70.000 COP/noche",
    },
  ];

  const [activeRoomIndex, setActiveRoomIndex] = useState(3);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState("esp");

  useEffect(() => {
    const activeRoom = rooms[activeRoomIndex];
    const intervalRooms = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % activeRoom.images.length);
    }, 3000);

    return () => clearInterval(intervalRooms);
  }, [activeRoomIndex, rooms]);

  const handleRoomHover = (index) => {
    setActiveRoomIndex(index);
    setCurrentImageIndex(0);
  };

  const activeRoom = rooms[activeRoomIndex];
  return (
    <div className="rooms" id="habitaciones">
      <SectionTitle
        title="NUESTRAS HABITACIONES Y SERVICIOS"
        image={flowerImage}
        backgroundColor="#124122"
        circleColor="#f9b234"
        isImageLeft={false}
      />
      <div className="rooms__container">
        <div className="rooms__carousel-container">
          {rooms.map((room, index) => {
            const isActive = index === activeRoomIndex;

            return (
              <div
                key={room.id}
                className={`rooms__carousel-item ${
                  isActive
                    ? "rooms__carousel-item--active"
                    : "rooms__carousel-item--inactive"
                }`}
                onMouseEnter={() => handleRoomHover(index)}
              >
                <div
                  className="rooms__carousel-image"
                  style={{
                    backgroundImage: `url(${
                      isActive ? room.images[currentImageIndex] : room.images[0]
                    })`,
                  }}
                />

                {/* Nombre de la habitación (siempre visible) */}
                <div className="rooms__carousel-name">
                  <span>{room.name}</span>
                </div>

                {/* Detail container DENTRO del carousel-item activo (solo móvil) */}
                {isActive && (
                  <div className="rooms__detail-container">
                    <div className="rooms__detail-info">
                      <h2 className="rooms__detail-name">{activeRoom.name}</h2>

                      <div className="rooms__detail-amenities">
                        {activeRoom.amenities.map((amenity, index) => (
                          <div key={index} className="rooms__detail-amenity">
                            ✓ {amenity}
                          </div>
                        ))}
                      </div>

                      <p className="rooms__detail-complements">
                        {activeRoom.complements}
                      </p>
                    </div>

                    <div className="rooms__detail-booking">
                      <div className="rooms__detail-price">
                        {activeRoom.price}
                      </div>

                      <button type="button" className="rooms__detail-button">
                          <img src={buttonLogo} alt="Ícono de reserva" className="rooms__detail-button-icon"/>
                        <span className="rooms__detail-button-text">
                          {language === "esp" ? "Reserva aquí" : "Book here"}
                        </span>
                      </button>

                      <p className="rooms__detail-cancellation">
                        Cancelación gratuita
                      </p>
                    </div>
                  </div>
                )}

                {isActive && (
                  <div className="rooms__carousel-details">
                    <h3 className="rooms__carousel-title">
                      Habitación {room.name}
                    </h3>
                    <p className="rooms__carousel-description">
                      {room.description} + {room.amenities.join(" + ")} +
                      desayuno
                    </p>

                    <div className="rooms__carousel-footer">
                      <div className="rooms__carousel-indicators">
                        <span>Desliza para explorar</span>
                        <div className="rooms__carousel-dots">
                          {room.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              className={`rooms__carousel-dot ${
                                currentImageIndex === imgIndex
                                  ? "rooms__carousel-dot--active"
                                  : ""
                              }`}
                              onClick={() => setCurrentImageIndex(imgIndex)}
                              aria-label={`Ver imagen ${imgIndex + 1}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* <p className="rooms__detail-cancellation rooms__detail-cancellation--mobile">
                        Cancelación gratuita
                      </p> */}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detail container para desktop (fuera del carousel) */}
        <div className="rooms__detail-container rooms__detail-container--desktop">
          <div className="rooms__detail-info">
            <h2 className="rooms__detail-name">{activeRoom.name}</h2>

            <div className="rooms__detail-amenities">
              {activeRoom.amenities.map((amenity, index) => (
                <div key={index} className="rooms__detail-amenity">
                  ✓ {amenity}
                </div>
              ))}
            </div>

            <p className="rooms__detail-complements">
              {activeRoom.complements}
            </p>
          </div>

          <div className="rooms__detail-booking">
            <div className="rooms__detail-price">{activeRoom.price}</div>

            <button type="button" className="rooms__detail-button">
              <div className="rooms__detail-button-icon">
                <img src={buttonLogo} alt="Ícono de reserva" />
              </div>
              <span className="rooms__detail-button-text">
                {language === "esp" ? "Reserva aquí" : "Book here"}
              </span>
            </button>

            <p className="rooms__detail-cancellation">Cancelación gratuita</p>
          </div>
        </div>
      </div>
    </div>
  );
  /* return (
    <div className="rooms" id="habitaciones">
      <SectionTitle
        title="NUESTRAS HABITACIONES Y SERVICIOS"
        image={flowerImage}
        backgroundColor="#124122"
        circleColor="#f9b234"
        isImageLeft={false}
      />
      <div className="rooms__container">
        <div className="rooms__carousel-container">
          {rooms.map((room, index) => {
            const isActive = index === activeRoomIndex;

            return (
              <div
                key={room.id}
                className={`rooms__carousel-item ${
                  isActive
                    ? "rooms__carousel-item--active"
                    : "rooms__carousel-item--inactive"
                }`}
                onMouseEnter={() => handleRoomHover(index)}
              >
                <div
                  className="rooms__carousel-image"
                  style={{
                    backgroundImage: `url(${
                      isActive ? room.images[currentImageIndex] : room.images[0]
                    })`,
                  }}
                />
                {/* Nombre de la habitación siempre visible }
                <div className="rooms__carousel-name">
                  <span>{room.name}</span>
                </div>
                {index === activeRoomIndex && (
                  <div className="rooms__carousel-details">
                    <h3 className="rooms__carousel-title">
                      Habitación {room.name}
                    </h3>
                    <p className="rooms__carousel-description">
                      {room.description} + {room.amenities.join(" + ")} +
                      desayuno
                    </p>

                    <div className="rooms__carousel-footer">
                      <div className="rooms__carousel-indicators">
                        <span>Desliza para explorar</span>
                        <div className="rooms__carousel-dots">
                          {room.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              className={`rooms__carousel-dot ${
                                currentImageIndex === imgIndex
                                  ? "rooms__carousel-dot--active"
                                  : ""
                              }`}
                              onClick={() => setCurrentImageIndex(imgIndex)}
                              aria-label={`Ver imagen ${imgIndex + 1}`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="rooms__detail-cancellation rooms__detail-cancellation--mobile">
                        Cancelación gratuita
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="rooms__detail-container">
          <div className="rooms__detail-info">
            <h2 className="rooms__detail-name">{activeRoom.name}</h2>

            <div className="rooms__detail-amenities">
              {activeRoom.amenities.map((amenity, index) => (
                <div key={index} className="rooms__detail-amenity">
                  ✓ {amenity}
                </div>
              ))}
            </div>

            <p className="rooms__detail-complements">
              {activeRoom.complements}
            </p>
          </div>

          <div className="rooms__detail-booking">
            <div className="rooms__detail-price">{activeRoom.price}</div>

            <button type="button" className="rooms__detail-button">
              <div className="rooms__detail-button-icon">
                <img src={buttonLogo} alt="Ícono de reserva" />
              </div>
              <span className="rooms__detail-button-text">
                {language === "esp" ? "Reserva aquí" : "Book here"}
              </span>
            </button>

            <p className="rooms__detail-cancellation">Cancelación gratuita</p>
          </div>
        </div>
      </div>
    </div>
  ); */
}

export default Rooms;
