import React, { useState } from "react";
import { Modal, Header, Button, Icon, Accordion } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import DropdownDescription from "../dropdownDescription/DropdownDescription";
import FormContact from "../formContact/FormContact";
import { IconButton, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Product = ({ product, isOpen, onClose, handleAddToCart }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header>{product.name}</Modal.Header>
      <Modal.Content image>
        <Image
          src={product.image[0]}
          alt="Product Image"
          width={300}
          height={150}
        />
        {product.descuento ? (
          <div className="discountBadge">
            <IconButton
              color="error"
              className="iconButton"
              style={{ backgroundColor: "white" }}
            >
              <LocalOfferIcon />
            </IconButton>
            <Typography variant="caption" className="discountText" color="red">
              <p className="font-bold">{product.descuento} OFF</p>
            </Typography>
          </div>
        ) : null}
        <div>
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
