import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/customercss.css"; // Add appropriate styles

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://backend-production-bbec.up.railway.app";

function CustomerP() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customerId] = useState(1); // Replace with dynamic customer ID if needed
  const [purchaseMessage, setPurchaseMessage] = useState("");

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/customer/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // View product details
  const viewProductDetails = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/customer/products/${id}`);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  // Purchase a product
  const purchaseProduct = async (productId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/customer/purchase`,
        null, // Request body is not needed for this API
        {
          params: {
            productId,
            customerId,
          },
        }
      );
      setPurchaseMessage(response.data);
    } catch (error) {
      console.error("Error purchasing product:", error);
      setPurchaseMessage("Purchase failed!");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id="customer-section">
      <div className="header">
        <h1>Welcome to Our Store</h1>
        <p>Browse and purchase your favorite products with ease.</p>
      </div>

      {/* Product List */}
      <div className="product-grid">
        <h2>Available Products</h2>
        {products.length > 0 ? (
          <div className="grid-container">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button
                  className="btn-view-details"
                  onClick={() => viewProductDetails(product.id)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available.</p>
        )}
      </div>

      {/* Product Details */}
      {selectedProduct && (
        <div className="product-details-modal">
          <div className="modal-content">
            <span
              className="close-modal"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </span>
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p className="price">Price: ${selectedProduct.price}</p>
            <button
              className="btn-purchase"
              onClick={() => purchaseProduct(selectedProduct.id)}
            >
              Purchase
            </button>
          </div>
        </div>
      )}

      {/* Purchase Message */}
      {purchaseMessage && (
        <div className="purchase-message">
          <p>{purchaseMessage}</p>
          <button onClick={() => setPurchaseMessage("")}>Close</button>
        </div>
      )}
    </section>
  );
}

export default CustomerP;

/* General page styles */
/*.customer-page {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.product-item {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}

.product-item button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.product-item button:hover {
  background-color: #0056b3;
}

/* Modal styles 
.product-details-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
}

.modal-content {
  position: relative;
  text-align: center;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
}

.close-modal:hover {
  color: #f00;
}

.price {
  font-weight: bold;
  margin-top: 10px;
}

.btn-purchase {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.btn-purchase:hover {
  background-color: #218838;
}
*/