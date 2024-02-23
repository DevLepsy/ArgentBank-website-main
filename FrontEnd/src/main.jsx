import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import Users from "./pages/Users.jsx";
import Error from "./pages/Error.jsx";

const HomeLazy = lazy(() => import("./pages/Home.jsx"));
const SignInLazy = lazy(() => import("./pages/SignIn.jsx"));
const UsersLazy = lazy(() => import("./pages/Users.jsx"));
const ErrorLazy = lazy(() => import("./pages/Error.jsx"));

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
