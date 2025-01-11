import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Products from "../src/pages/Products";
import Contact from "../src/pages/Contact";
import ForgotPasswd from "./pages/ForgotPasswd";

import React from "react";
import Reset from "./pages/Reset";
import Admin from "./pages/Admin";
import UserMgt from "./pages/UserMgt";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import Analytics from "./pages/Analytics";
import SearchUser from "./pages/SearchUser";
import UserProfile from "./pages/UserProfile";
import Notification from "./pages/Notification";
import ExportData from "./pages/ExportData";
import Seller from "./pages/Seller";
import AboutUsPage from "./pages/AboutUsPage"; // Updated import
import SellerPage from "./pages/SellerPage"; // Updated import
import Customer from "./pages/Customer";
import CustomerPage from "./pages/CustomerPage";
import AddProductForm from "./components/AddProductForm";
import Cart from "./components/Cart";
//import CustomerProducts from "./components/CustomerProducts";
import SellerProducts from "./components/SellerProducts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswd />,
  },
  {
    path: "/reset-password",
    element: <Reset />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/usermgt",
    element: <UserMgt />,
  },
  {
    path: "/addUser",
    element: <AddUser />,
  },
  {
    path: "/admin/users/edit/:id",
    element: <EditUser />,
  },
  {
    path: "/admin/user-role-stats",
    element: <Analytics />,
  },
  {
    path: "/admin/search",
    element: <SearchUser />,
  },
  {
    path: "/profile/:userId",
    element: <UserProfile />,
  },
  {
    path: "/admin/notifications",
    element: <Notification />,
  },
  {
    path: "/admin/download/users",
    element: <ExportData />,
  },
  {
    path: "/seller",
    element: <Seller />,
  },
  {
    path: "/customer",
    element: <Customer />,
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />, // Updated route
  },
  {
    path: "/sellerpage",
    element: <SellerPage />,
  },
  {
    path: "/customerpage",
    element: <CustomerPage />, // Updated route
  },
  {
    path: "/add-product",
    element: <AddProductForm />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  // {
  //   path: "/customer/products",
  //   element: <CustomerProducts />,
  // },
  {
    path: "/seller/products",
    element: <SellerProducts />,
  }
]);

export default router;
