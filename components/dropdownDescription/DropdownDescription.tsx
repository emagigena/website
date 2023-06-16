import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DropdownInfo({ product }) {
  return (
    <div>
      <Accordion
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "red",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ color: "white" }}
        >
          <p className="font-bold">Description</p>
        </AccordionSummary>
        <AccordionDetails style={{ color: "white" }}>
          <p className="font-bold">{product.description}</p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "red",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ color: "white" }}
        >
          <p className="font-bold">Precio</p>
        </AccordionSummary>
        <AccordionDetails style={{ color: "white" }}>
          {product.descuento ? (
            <p className="font-bold">
              $ {(product.price * (1 - product.descuento / 100)).toFixed(2)}
            </p>
          ) : (
            <p className="font-bold">$ {(product.price).toFixed(2)}</p>
          )}
        </AccordionDetails>
      </Accordion>
      
      <Accordion
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "red",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          style={{ color: "white" }}
        >
          <p className="font-bold">Servicios</p>
        </AccordionSummary>
        <AccordionDetails>{product.services}</AccordionDetails>
      </Accordion>
    </div>
  );
}
