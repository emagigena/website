import React, { useState } from "react";
import Link from "next/link";
import logo from "../public/logo3.png";
import Image from "next/image";

const NavBar = () => {

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
