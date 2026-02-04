import { useCallback, useMemo, useState } from "react";
import type { ProductCard as Product } from "../../api/products/products.types";
import { ProductCardCarousel } from "./ProductCardCarousel";
import { pickRandom } from "../../utils/pickRandom";
import { useSwipe } from "./useSwipe";
import styles from "./Carousel.module.css";

interface Props {
  products: Product[];
}

const MAX_ITEMS = 8;

export function Carousel({ products }: Props) {
  const items = useMemo(() => pickRandom(products, MAX_ITEMS), [products]);

  const [index, setIndex] = useState(0);

  const safeIndex =
    items.length === 0
      ? 0
      : ((index % items.length) + items.length) % items.length;

  const prev = useCallback(() => {
    setIndex((i) => i - 1);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => i + 1);
  }, []);

  const swipeHandlers = useSwipe(next, prev);

  if (!items.length) {
    return null;
  }

  return (
    <section className={styles.carousel}>
      <header className={styles.header}>
        <h2>Nejprodávanější</h2>

        <div className={styles.controls}>
          <button type="button" onClick={prev} aria-label="Předchozí produkt">
            ←
          </button>
          <button type="button" onClick={next} aria-label="Další produkt">
            →
          </button>
        </div>
      </header>

      <div className={styles.viewport} {...swipeHandlers}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${safeIndex * 100}%)`,
          }}
        >
          {items.map((product) => (
            <div key={product.id} className={styles.slide}>
              <ProductCardCarousel product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
