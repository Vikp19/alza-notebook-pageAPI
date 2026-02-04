import { useState } from "react";
import { CategoriesSection } from "./components/Categories/CategoriesSection";
import { Carousel } from "./components/Carousel/Carousel";
import { ProductsSection } from "./components/ProductsSection/ProductsSection";
import { useProducts } from "./hooks/useProducts";

import "./styles/layout.css";

export function App() {
  const [page, setPage] = useState(1);
  const { products, loading, error } = useProducts(page);

  return (
    <main className="layout">
      <h1 className="pageTitle">Notebooky</h1>

      <CategoriesSection />

      {!loading && !error && <Carousel products={products} />}

      <ProductsSection
        products={products}
        page={page}
        loading={loading}
        error={error}
        onPageChange={setPage}
      />
    </main>
  );
}
