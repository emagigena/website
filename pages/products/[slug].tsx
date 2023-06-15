import React from "react";
import products from "../../data/products.json";

export default function Product({ products }) {
  return (
    <>
      <div> {products.image}</div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const searchResults = products;
  const cabin = searchResults.find(
    (cabin) => cabin.id.toString() === params.slug
  );

  return {
    props: {
      products: cabin, // Pasar el objeto específico en lugar de solo el nombre
    },
  };
}

export async function getStaticPaths() {
  const cabins = products;
  let fullPaths = [];

  for (let cabin of cabins) {
    fullPaths.push({ params: { slug: cabin.id.toString() } });
  }

  return {
    paths: fullPaths,
    fallback: "blocking",
  };
}
