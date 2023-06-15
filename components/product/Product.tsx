import React, { useState } from "react";
import { Modal, Image, Header, Button, Icon } from "semantic-ui-react";
import Cart from "../cart/Cart";

const Product = ({ product, isOpen, onClose, handleAddToCart }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header>{product.name}</Modal.Header>
      <Modal.Content image>
        <Image src={product.image} alt="Product Image" size="medium" />
        <Modal.Description>
          <Header as="h3">Description</Header>
          <p>{product.description}</p>
          <Header as="h3">Price</Header>
          <p>${product.price}</p>
        </Modal.Description>
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
      {/* <Cart cartItems={cartItems} />{" "} */}
      {/* Asegúrate de utilizar correctamente el componente Cart */}
    </Modal>
  );
};

export default Product;
