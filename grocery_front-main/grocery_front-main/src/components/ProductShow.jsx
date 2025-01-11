import React from "react";
import "../styles/styles.css"; // Adjust the path as needed

const products = [
  { name: "Mango", price: 7, imgSrc: "src/assets/img/mango.jpg", alt: "Mango" },
  { name: "Coffee", price: 2, imgSrc: "src/assets/img/coffee.jpg", alt: "Coffee" },
  { name: "Pine Apple", price: 4, imgSrc: "src/assets/img/pine-apple.jpg", alt: "Pine Apple" },
  { name: "Apple", price: 5, imgSrc: "src/assets/img/apple.jpg", alt: "Apple" },
  { name: "Orange", price: 3, imgSrc: "src/assets/img/orange.jpg", alt: "Orange" },
  { name: "Avocado", price: 5, imgSrc: "src/assets/img/avocado.jpg", alt: "Avocado" },
  { name: "Milk", price: 8, imgSrc: "src/assets/img/milk.jpg", alt: "Milk" },
  { name: "Vegetable", price: 4, imgSrc: "src/assets/img/vegetable.jpg", alt: "Vegetable" },
];

function ProductCard({ product, onBuyNow }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imgSrc} alt={product.alt} />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <button className="btn-filled-dark" onClick={onBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

function ProductShow() {
  const promptLogin = () => {
    const userResponse = window.confirm(
      "Please log in or register to proceed with your purchase."
    );
    if (userResponse) {
      // Redirect to login page
      window.location.href = "/login"; // Update the URL as per your login page
    }
  };

  return (
    <section id="e-showroom">
      <h2>Our E-prod</h2>
      <p className="section-description">
        Explore our exclusive collection of products.
      </p>

      <div className="category">
        <div className="category-header">
          <h3>Grocery Products</h3>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} onBuyNow={promptLogin} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShow;