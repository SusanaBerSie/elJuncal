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
import { useTranslation } from "react-i18next";
import { openWhatsapp } from "../../utils/whatsapp";

function Rooms() {
  const { t } = useTranslation();

  const rooms = [
    {
      id: 0,
      name: t("margarita"),
      description: t("camaSemidoble"),
      images: [room1Photo1, room1Photo2, room1Photo3],
      amenities: [t("sofaCama"), t("armarioEscritorio")],
      complements: t("incluyeDesayuno"),
      price: t("precioNoche70"),
    },
    {
      id: 1,
      name: t("cactus"),
      description: t("dosCamasDobles"),
      images: [room2Photo1, room2Photo2, room2Photo3],
      amenities: [t("sillaAuxiliar"), t("tocador")],
      complements: t("incluyeDesayuno"),
      price: t("precioNoche150"),
    },
    {
      id: 2,
      name: t("rosa"),
      description: t("camaDobleYsemidoble"),
      images: [room3Photo1, room3Photo2, room3Photo3],
      amenities: [t("sillaAuxiliar"), t("espejoDePared")],
      complements: t("incluyeDesayuno"),
      price: t("precioNoche130"),
    },
    {
      id: 3,
      name: t("girasol"),
      description: t("dosCamasDobles"),
      images: [room4Photo1, room4Photo2, room4Photo3],
      amenities: [t("sillaAuxiliar"), t("vistaAlJardin")],
      complements: t("incluyeDesayuno"),
      price: t("precioNoche150"),
    },
  ];

  const [activeRoomIndex, setActiveRoomIndex] = useState(3);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        title={t("nuestrasHabitacionesYServicios")}
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

                      <button type="button" className="rooms__detail-button" onClick={()=> openWhatsapp(t('holaQuisieraReservarHabitacion'))} aria-label={t('reservaAhora')} >
                          <img src={buttonLogo} alt="Icono cabeza de toro" className="rooms__detail-button-icon"/>
                        <span className="rooms__detail-button-text">
                          {t('reservarAqui')}
                        </span>
                      </button>

                      <p className="rooms__detail-cancellation">
                        {t('cancelacionGratuita')}
                      </p>
                    </div>
                  </div>
                )}

                {isActive && (
                  <div className="rooms__carousel-details">
                    <h3 className="rooms__carousel-title">{t('habitacion')} {room.name}</h3>
                    <p className="rooms__carousel-description">
                      {room.description} + {room.amenities.join(" + ")} + {t('desayuno')}
                    </p>

                    <div className="rooms__carousel-footer">
                      <div className="rooms__carousel-indicators">
                        <span>{t('deslizaParaExplorar')}</span>
                        <div className="rooms__carousel-dots">
                          {room.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              className={`rooms__carousel-dot ${
                                currentImageIndex === imgIndex
                                  ? "rooms__carousel-dot--active"
                                  : ""
                              }`}
                              onClick={(e) => {e.stopPropagation(); setCurrentImageIndex(imgIndex)}}
                              aria-label={t('verImagen', { index: imgIndex + 1 })}
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
                  ↠ {amenity}
                </div>
              ))}
            </div>

            <p className="rooms__detail-complements">
              {activeRoom.complements}
            </p>
          </div>

          <div className="rooms__detail-booking">
            <div className="rooms__detail-price">{activeRoom.price}</div>

            <button type="button" className="rooms__detail-button" onClick={()=> openWhatsapp(t('holaQuisieraReservarHabitacion'))} aria-label={t('reservaAhora')}>
              <img src={buttonLogo} alt="Icono cabeza de toro" className="rooms__detail-button-icon"/>
              <span className="rooms__detail-button-text">
                {t('reservarAqui')}
              </span>
            </button>

            <p className="rooms__detail-cancellation">{t('cancelacionGratuita')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
