import React, { useState } from "react";
import { Menu, Icon, Label } from "semantic-ui-react";
import Cart from "./cart/Cart";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <nav className="bg-gray-900">
      <Menu secondary size="large">
        <Menu.Menu position="right">
          <Menu.Item onClick={handleCartOpen}></Menu.Item>
        </Menu.Menu>
      </Menu>
    </nav>
  );
};

export default NavBar;
