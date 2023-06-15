import React from "react";
import { Modal, Icon, Header, List, Button, Label } from "semantic-ui-react";

const Cart = ({ isOpen, onClose, cartItems, setCartItems }) => {
    
  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity < item.stock) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <Modal open={isOpen} onClose={onClose} direction="right">
      <Modal.Header>Cart</Modal.Header>
      <Modal.Content>
        {cartItems.length > 0 ? (
          <List divided relaxed>
            {cartItems.map((item) => (
              <List.Item key={item.id}>
                <List.Content floated="right">
                  <Button
                    icon
                    color="red"
                    size="mini"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Icon name="trash" />
                  </Button>
                </List.Content>
                <List.Content floated="left">
                  <List.Header>{item.name}</List.Header>
                  <List.Description>
                    Category: {item.category}
                  </List.Description>
                </List.Content>
                <List.Content floated="right">
                  <Button
                    icon="plus"
                    size="mini"
                    disabled={item.quantity >= item.stock}
                    onClick={() => handleIncreaseQuantity(item.id)}
                  />
                  <Label circular>{item.quantity}</Label>
                  <Button
                    icon="minus"
                    size="mini"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  />
                </List.Content>
              </List.Item>
            ))}
          </List>
        ) : (
          <p>No items in the cart.</p>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>
          <Icon name="close" />
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Cart;
