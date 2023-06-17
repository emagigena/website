import React, { useState } from "react";
import { Menu, Icon, Label } from "semantic-ui-react";
import Cart from "./cart/Cart";
import Link from "next/link";
import logo from "../public/logo3.png";
import Image from "next/image";

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            style={{ width: "70px", height: "70px" }}
          />
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
