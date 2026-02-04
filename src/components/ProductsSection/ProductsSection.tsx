import type { ProductCard as Product } from "../../api/products/products.types";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductsSection.module.css";

interface Props {
  products: Product[];
  page: number;
  onPageChange: (page: number) => void;
  loading: boolean;
  error: string | null;
}

export function ProductsSection({
  products,
  page,
  onPageChange,
  loading,
  error,
}: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Produkty</h2>

      {loading && <div className={styles.state}>Načítání…</div>}
      {error && <div className={styles.stateError}>{error}</div>}

      {!loading && !error && (
        <>
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className={styles.pagination}>
            <button
              type="button"
              disabled={page === 1}
              onClick={() => onPageChange(page - 1)}
            >
              ← Předchozí
            </button>

            <span>Strana {page}</span>

            <button type="button" onClick={() => onPageChange(page + 1)}>
              Další →
            </button>
          </div>
        </>
      )}
    </section>
  );
}
