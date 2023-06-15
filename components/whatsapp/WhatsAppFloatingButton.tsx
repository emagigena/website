import React from "react";
import { Icon } from "semantic-ui-react";

const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    // Reemplaza el número de teléfono con el número de WhatsApp de tu empresa
    window.open("https://api.whatsapp.com/send?phone=+1234567890", "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <Icon
        name="whatsapp"
        size="big"
        circular
        color="green"
        onClick={handleWhatsAppClick}
        style={{ cursor: "pointer", backgroundColor: "white" }}
      />
    </div>
  );
};

export default WhatsAppFloatingButton;
