import Image from "next/image";
import React, { useState } from "react";
import { Card, Input, Pagination, Button, Icon } from "semantic-ui-react";
import products from "../../data/products.json";
import Product from "../product/Product";
import NavBar from "../NavBar";
import Cart from "../cart/Cart";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const productsPerPage = 10;

  // Filtrar productos según el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
  const handleOpenProductModal = (product) => {
    setSelectedProduct(product);
  };

  // Cerrar el modal del producto
  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  // Agregar producto al carrito
  const addToCart = (product) => {
    handleAddToCart(product);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reiniciar la página actual al realizar una nueva búsqueda
  };

  return (
    <div className="productList">
      <NavBar cartItems={cartItems} setCartItems={setCartItems}/>
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
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            className="card"
            onClick={() => handleOpenProductModal(product)}
            style={{ cursor: "pointer" }}
          >
            <Card.Content>
              <div className="imageContainer">
                <Image
                  src={product.image}
                  alt="image"
                  width={800}
                  height={800}
                  className="image"
                ></Image>
              </div>
              <Card.Header>{product.name}</Card.Header>
              <Card.Meta>{product.category}</Card.Meta>
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
      {/* <Cart cartItems={cartItems} />{" "} */}
      {/* Asegúrate de utilizar correctamente el componente Cart */}
    </div>
  );
};

export default ProductList;
