// routes/index.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index";
import Layout from "../Components/Layout";
const Home = lazy(() => import("../Components/Home"));
const Products = lazy(() => import("../Components/Products"));

const AppRoutes = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
);
export default AppRoutes;
