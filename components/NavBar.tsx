import React, { useState } from "react";
import { Menu, Icon, Label } from "semantic-ui-react";
import Cart from "./cart/Cart";

const NavBar = ({ cartItems, setCartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <Menu secondary size="large">
      <Menu.Menu position="right">
        <Menu.Item onClick={handleCartOpen}>
          <Icon name="cart" />
          {cartItems.length > 0 && (
            <Label color="red" floating circular>
              {cartItems.length}
            </Label>
          )}
        </Menu.Item>
      </Menu.Menu>
      <Cart isOpen={isCartOpen} onClose={handleCartClose} cartItems={cartItems} setCartItems={setCartItems} />
    </Menu>
  );
};

export default NavBar;
