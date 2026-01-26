import "./sectionTitle.css";
import AmorphousCircle from "../AmorphousCircle/AmorphousCircle";

export default function SectionTitle({
  image,
  title,
  backgroundColor = "#124122",
  amorphousCircle = "#f9b234" /* imagePosition, */,
  isImageLeft = "false",
}) {
  return (
    <div
      className={`sectionTitle__container ${
        isImageLeft
          ? "sectionTitle__container-left"
          : "sectionTitle__container-right"
      }`}
    >
      <AmorphousCircle color={amorphousCircle} size="100px" variant="2">
        {/* <div
        className="sectionTitle__imageContainer-circle"
        style={{
          backgroundColor: amorphousCircle,
          borderColor: amorphousCircle,
        }}
      > */}
        <img
          className="sectionTitle__imageContainer-photo"
          src={image}
          alt={title}
        />
        {/* </div> */}
      </AmorphousCircle>
      <div
        className="sectionTitle__boxContainer"
        style={{ backgroundColor: backgroundColor }}
      >
        <h2 className="sectionTitle__title">{title}</h2>
      </div>
    </div>
  );
}
