import React, { useState } from "react";
import { Card, Input, Pagination } from "semantic-ui-react";
import cabins from "../../data/cabins.json";
import Product from "../product/Product";
import NavBar from "../NavBar";
import Cart from "../cart/Cart";
import { IconButton, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import WifiIcon from "@mui/icons-material/Wifi";
import Image from "next/image";
import CabinIcon from "@mui/icons-material/Cabin";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GarageIcon from "@mui/icons-material/Garage";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductList = () => {
  const [isLoading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const productsPerPage = 5;

  // Filtrar productos según el término de búsqueda
  const filteredProducts = cabins.filter((cabin) =>
    cabin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular la cantidad total de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Obtener los productos de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Cambiar de página
  const handlePageChange = (event, data) => {
    setCurrentPage(data.activePage);
  };

  // Abrir el modal del producto seleccionado
  const handleOpenProductModal = (cabin) => {
    setSelectedProduct(cabin);
  };

  // Cerrar el modal del producto
  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  // Agregar producto al carrito
  const addToCart = (cabin) => {
    handleAddToCart(cabin);
  };

  const handleAddToCart = (cabin) => {
    setCartItems([...cartItems, cabin]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reiniciar la página actual al realizar una nueva búsqueda
  };

  return (
    <div className="productList" style={{ backgroundColor: "white" }}>
      {/* <NavBar cartItems={cartItems} setCartItems={setCartItems} /> */}
      {/* <NavBar onSearch={handleSearch} /> */}
      <div className="search">
        <Input
          type="text"
          icon="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Card.Group className="cardGroup">
        {currentProducts.map((cabins) => (
          <Card
            key={cabins.id}
            className="card"
            onClick={() => handleOpenProductModal(cabins)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="responsive"
              style={{ display: "flex", objectFit: "cover" }}
            >
              <Image
                alt="product image"
                src={cabins.image[0]} // Mostrar solo la primera imagen
                width={800}
                height={800}
                className={cn(
                  "object-cover duration-700 ease-in-out group-hover:opacity-75",
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                )}
                onLoadingComplete={() => setLoading(false)}
              />

              {cabins.cabañas && (
                <div className="absolute top-2 left-2 flex items-center justify-center bg-white rounded-full p-2">
                  <CabinIcon />
                  <span className="text-gray-500 text-sm ml-1">
                    {cabins.cabañas}
                  </span>
                </div>
              )}

              {cabins.services && (
                <div className="absolute top-2 right-2 flex items-center justify-center bg-white rounded-full p-2">
                  <WifiIcon />
                  <FreeBreakfastIcon />
                  <AcUnitIcon />
                  <span className="text-gray-500 text-sm ml-1"></span>
                </div>
              )}
            </div>

            <Card.Content>
              <Card.Header>{cabins.name}</Card.Header>
              <Card.Meta>{cabins.description}</Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <div className="paginationContainer">
        <Pagination
          activePage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="pagination"
        />
      </div>
      {selectedProduct && (
        <Product
          product={selectedProduct}
          isOpen={selectedProduct !== null}
          onClose={handleCloseProductModal}
          handleAddToCart={handleAddToCart}
        />
      )}
      {/* <Cart cartItems={cartItems} /> */}
      {/* Asegúrate de utilizar correctamente el componente Cart */}
    </div>
  );
};

export default ProductList;
