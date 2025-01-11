// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/sellercss.css"; // Include additional styling for notifications

// function Seller() {
//   const products = [
//     { name: "Elegant Sofa", price: 799, image: "/img/coffee-table.jpg" },
//     { name: "Modern Coffee Table", price: 299, image: "/img/coffee-table.jpg" },
//     {
//       name: "Comfortable Armchair",
//       price: 499,
//       image: "/img/coffee-table.jpg",
//     },
//     { name: "Entertainment Unit", price: 599, image: "/img/coffee-table.jpg" },
//   ];

//   const [notifications, setNotifications] = useState([]);

//   const fetchNotifications = async () => {
//     try {
//       const response = await axios.get(
//         "https://backend-production-bbec.up.railway.app/notifications/user/unread","http://localhost:8080"
//       );
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const markAllAsRead = async () => {
//     try {
//       await axios.put(
//         "https://backend-production-bbec.up.railway.app/notifications/user/mark-all-as-read","http://localhost:8080"
//       );
//       setNotifications([]);
//     } catch (error) {
//       console.error("Error marking notifications as read:", error);
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   const handleProductAction = (productName) => {
//     alert(`You selected: ${productName}`);
//   };

//   return (
//     <section id="seller-section">
//       {/* Header */}
//       <div className="header">
//         <h2>Welcome To Seller Dashboard</h2>
//       </div>

//       {/* Notifications Section */}
//       <div className="notifications-section">
//         <h2>Unread Notifications</h2>
//         {notifications.length > 0 ? (
//           <div>
//             <ul className="notification-list">
//               {notifications.map((notification) => (
//                 <li key={notification.id} className="notification-item">
//                   <h3>{notification.title}</h3>
//                   <p>{notification.message}</p>
//                   <span className="timestamp">
//                     {new Date(notification.timestamp).toLocaleString()}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <button className="btn-mark-read" onClick={markAllAsRead}>
//               Mark All as Read
//             </button>
//           </div>
//         ) : (
//           <p>No unread notifications.</p>
//         )}
//       </div>
//       <div className="header">
//         <p>Manage your listings and track your sales seamlessly.</p>
//       </div>
//       {/* Product Grid */}
//       <div className="product-grid">
//         {products.map((product, index) => (
//           <div key={index} className="product-card">
//             <div className="product-image">
//               <img src={product.image} alt={product.name} />
//             </div>
//             <div className="product-details">
//               <h3>{product.name}</h3>
//               <p className="price">${product.price}</p>
//               <button
//                 className="btn-action"
//                 onClick={() => handleProductAction(product.name)}
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Seller;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/sellercss.css";

// function Seller() {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "OTHER",
//   });
//   const [sellerId] = useState(1); // Replace with dynamic seller ID if needed
//   const [notifications, setNotifications] = useState([]);

//   // Fetch products from the backend
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/seller/products?sellerId=${sellerId}`,`https://backend-production-bbec.up.railway.app/seller/products?sellerId=${sellerId}`
//       );
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Add a new product
//   const addProduct = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/seller/products","https://backend-production-bbec.up.railway.app/seller/products", {
//         ...newProduct,
//         sellerId,
//       });
//       setProducts((prevProducts) => [...prevProducts, response.data]);
//       setNewProduct({ name: "", description: "", price: "", category: "OTHER" });
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   // Delete a product
//   const deleteProduct = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/seller/products/${id}`,`https://backend-production-bbec.up.railway.app/seller/products/${id}`);
//       setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   // Fetch notifications
//   const fetchNotifications = async () => {
//     try {
//       const response = await axios.get(
//         "https://backend-production-bbec.up.railway.app/notifications/user/unread"
//       );
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   // Mark notifications as read
//   const markAllAsRead = async () => {
//     try {
//       await axios.put(
//         "https://backend-production-bbec.up.railway.app/notifications/user/mark-all-as-read"
//       );
//       setNotifications([]);
//     } catch (error) {
//       console.error("Error marking notifications as read:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchNotifications();
//   }, []);

//   return (
//     <section id="seller-section">
//       {/* Header */}
//       <div className="header">
//         <h2>Welcome To Seller Dashboard</h2>
//         <p>Manage your listings and track your sales seamlessly.</p>
//       </div>

//       {/* Notifications Section */}
//       <div className="notifications-section">
//         <h2>Unread Notifications</h2>
//         {notifications.length > 0 ? (
//           <div>
//             <ul className="notification-list">
//               {notifications.map((notification) => (
//                 <li key={notification.id} className="notification-item">
//                   <h3>{notification.title}</h3>
//                   <p>{notification.message}</p>
//                   <span className="timestamp">
//                     {new Date(notification.timestamp).toLocaleString()}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <button className="btn-mark-read" onClick={markAllAsRead}>
//               Mark All as Read
//             </button>
//           </div>
//         ) : (
//           <p>No unread notifications.</p>
//         )}
//       </div>

//       {/* Add Product Form */}
//       <form className="add-product-form" onSubmit={addProduct}>
//         <h3>Add New Product</h3>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={newProduct.name}
//           onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={newProduct.description}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, description: e.target.value })
//           }
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={newProduct.price}
//           onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//           required
//         />
//         <select
//           value={newProduct.category}
//           onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
//           required
//         >
//           <option value="FRUITS">Fruits</option>
//           <option value="VEGETABLES">Vegetables</option>
//           <option value="DAIRY">Dairy</option>
//           <option value="MEAT">Meat</option>
//           <option value="BEVERAGES">Beverages</option>
//           <option value="SNACKS">Snacks</option>
//           <option value="BAKERY">Bakery</option>
//           <option value="OTHER">Other</option>
//         </select>
//         <button type="submit">Add Product</button>
//       </form>

//       {/* Product Grid */}
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <div className="product-details">
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p className="price">${product.price}</p>
//               <button
//                 className="btn-delete"
//                 onClick={() => deleteProduct(product.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Seller;
import React from 'react'
import Header from "../components/Header";
import SellerP from "../components/SellerP";
import Footer from "../components/Footer";

const Seller = () => {
  return (
    <div>
      <Header />
      <SellerP />
      <Footer />
    </div>
  )
}

export default Seller;