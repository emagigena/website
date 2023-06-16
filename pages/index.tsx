import React, { useRef, useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "@mui/material/";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header";
import ProductList from "../components/productList/ProductList";
import Footer from "../components/footer/Footer";
import WhatsAppFloatingButton from "../components/whatsapp/WhatsAppFloatingButton";

export default function Gallery() {
  return (
    <>
      <Header />
      <div>
        <ProductList />
      </div>
      <WhatsAppFloatingButton />

      <Footer />
    </>
  );
}
