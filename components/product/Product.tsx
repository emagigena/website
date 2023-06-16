import React, { useState } from "react";
import { Modal, Header, Button, Icon, Accordion } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DropdownDescription from "../dropdownDescription/DropdownDescription";
import FormContact from "../formContact/FormContact";
import { IconButton, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import WifiIcon from "@mui/icons-material/Wifi";
import CabinIcon from "@mui/icons-material/Cabin";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Product = ({ product, isOpen, onClose, handleAddToCart }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header>{product.name}</Modal.Header>
      <Modal.Content image>
        <img
          src={product.image[0]}
          alt="Product Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          }}
        />
        {product.cabañas && (
          <div className="absolute top-32 left-12 flex items-center justify-center bg-white rounded-full p-2">
            <CabinIcon />
            <span className="text-gray-500 text-sm ml-1">
              {product.cabañas}
            </span>
          </div>
        )}

        {product.services && (
          <div className="absolute top-32 right-12 flex items-center justify-center bg-white rounded-full p-2">
            <WifiIcon />
            <FreeBreakfastIcon />
            <AcUnitIcon />
            <span className="text-gray-500 text-sm ml-1"></span>
          </div>
        )}
      </Modal.Content>
      <Modal.Content>
        <div className="p-10">
          <DropdownDescription product={product} />
          <FormContact />
        </div>
        <div></div>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Close</Button>

        <Button
          icon
          labelPosition="left"
          onClick={() => handleAddToCart(product)}
        >
          <Icon name="cart" />
          Add to Cart
        </Button>
      </Modal.Actions>
      {/* <Cart cartItems={cartItems} /> */}
      {/* Asegúrate de utilizar correctamente el componente Cart */}
    </Modal>
  );
};

export default Product;
