import React, { useState } from "react";

export default function Product({ product }) {
  const { imageUrl, productName, description } = product;
  return (
    <>
      <img src={imageUrl} width='auto' height='300' />
      <p>{productName}</p>
      <p>{description}</p>
    </>
  );
}
