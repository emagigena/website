import React, { useState } from "react";
import { Card, Dropdown, Input, Label, Pagination } from "semantic-ui-react";
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
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import PoolIcon from "@mui/icons-material/Pool";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductList = () => {
  const [isLoading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [servicesFilter, setServicesFilter] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const productsPerPage = 5;

  // Filtrar productos según el término de búsqueda, ubicación y servicios
  const filteredProducts = cabins.filter((cabin) => {
    const nameMatch = cabin.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const locationMatch = cabin.ubi
      .toLowerCase()
      .includes(locationFilter.toLowerCase());
    const servicesMatch = servicesFilter.every((service) =>
      cabin.services.includes(service)
    );

    return nameMatch && locationMatch && servicesMatch;
  });

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

  const uniqueLocations = [...new Set(cabins.map((cabin) => cabin.ubi))];

  const handleLocationFilter = (location) => {
    setLocationFilter(location);
    setCurrentPage(1); // Reiniciar la página actual al aplicar un nuevo filtro
  };

  const handleServicesFilter = (service) => {
    if (servicesFilter.includes(service)) {
      setServicesFilter(servicesFilter.filter((s) => s !== service));
    } else {
      setServicesFilter([...servicesFilter, service]);
    }
    setCurrentPage(1); // Reiniciar la página actual al aplicar un nuevo filtro
  };

  return (
    <div className="productList" style={{ backgroundColor: "white" }}>
      {/* <NavBar cartItems={cartItems} setCartItems={setCartItems} /> */}
      <div className="search">
        <Input
          label="Busca tu complejo"
          type="text"
          icon="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <div className="filter d-flex"> */}
        <Dropdown
          className="ml-5"
          placeholder="Ubicación"
          value={locationFilter}
          options={uniqueLocations.map((location) => ({
            key: location,
            text: location,
            value: location,
          }))}
          onChange={(e, { value }) => handleLocationFilter(value)}
          selection
          clearable
        />
        <IconButton
          size="large"
          color={servicesFilter.includes("Wi-Fi") ? "primary" : "default"}
          onClick={() => handleServicesFilter("Wi-Fi")}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "5px",
            }}
          >
            <WifiIcon />
            <span className="font-bold">
              <p style={{ fontFamily: "Helvetica", fontSize: "14px" }}>Wi-Fi</p>
            </span>
          </div>
        </IconButton>

        <IconButton
          size="large"
          color={
            servicesFilter.includes("Desayuno incluido") ? "primary" : "default"
          }
          onClick={() => handleServicesFilter("Desayuno incluido")}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FreeBreakfastIcon />
            <span className="font-bold">
              <p style={{ fontFamily: "Helvetica", fontSize: "14px" }}>
                Desayuno
              </p>
            </span>
          </div>
        </IconButton>
        <IconButton
          size="large"
          color={
            servicesFilter.includes("Aire Acondicionado")
              ? "primary"
              : "default"
          }
          onClick={() => handleServicesFilter("Aire acondicionado")}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AcUnitIcon />
            <span className="font-bold">
              <p style={{ fontFamily: "Helvetica", fontSize: "14px" }}>A-C</p>
            </span>
          </div>
        </IconButton>
        <IconButton
          size="large"
          color={
            servicesFilter.includes("Estacionamiento") ? "primary" : "default"
          }
          onClick={() => handleServicesFilter("Estacionamiento")}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <GarageIcon />
            <span className="font-bold">
              <p style={{ fontFamily: "Helvetica", fontSize: "14px" }}>
                Estacionamiento
              </p>
            </span>
          </div>
        </IconButton>
        <IconButton
          size="large"
          color={servicesFilter.includes("Parrilla") ? "primary" : "default"}
          onClick={() => handleServicesFilter("Parrilla")}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <OutdoorGrillIcon />
            <span className="font-bold">
              <p style={{ fontFamily: "Helvetica", fontSize: "14px" }}>
                Parrilleros
              </p>
            </span>
          </div>
        </IconButton>
        <IconButton
          size="large"
          color={servicesFilter.includes("Piscina") ? "primary" : "default"}
          onClick={() => handleServicesFilter("Piscina")}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PoolIcon />
            <span className="font-bold">
              <p style={{ fontFamily: "Helvetica", fontSize: "14px" }}>
                Piscina
              </p>
            </span>
          </div>
        </IconButton>
        {/* Agrega aquí otros iconos de servicios */}
        {/* </div> */}
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
