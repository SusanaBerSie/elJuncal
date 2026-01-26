import "./amorphousCircle.css";
import React from "react";

function AmorphousCircle({
  variant = "1",
  children,
  size = "200px",
  color = "#f9b234",
  className,
}) {
  return (
    <div
      className={`amorphous amorphous--variant${variant} ${className}`}
      style={{ "--circle-color": color, "--circle-size": size }}
    >
      <div className="amorphous__outline"></div>
      <div className="amorphous__filled"></div>
      <div className="amorphous__content">{children}</div>
    </div>
  );
}

export default AmorphousCircle;
