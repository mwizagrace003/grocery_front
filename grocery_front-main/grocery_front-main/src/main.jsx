// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { RouterProvider } from "react-router-dom";
// import router from "./route.jsx";

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./route.jsx";
import "./index.css";
import './i18n'; // Import the i18n configuration to initialize it

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
