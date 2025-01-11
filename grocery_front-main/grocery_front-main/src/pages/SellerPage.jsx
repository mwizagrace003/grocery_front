import React from 'react'
import SellerProducts from "../components/SellerProducts";
import AddProductForm from "../components/AddProductForm";



const SellerPage = ({ sellerId }) => {
  return (
    <div>
      <h1>Seller Dashboard</h1>
      <SellerProducts sellerId={sellerId} />
      <AddProductForm sellerId={sellerId} />
    </div>
  );
};

export default SellerPage;
