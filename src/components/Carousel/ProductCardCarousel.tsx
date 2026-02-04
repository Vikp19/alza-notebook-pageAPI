import type { ProductCard as Product } from "../../api/products/products.types";
import styles from "./ProductCardCarousel.module.css";

interface Props {
  product: Product;
}

export function ProductCardCarousel({ product }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.imageUrl} alt={product.title} loading="lazy" />
      </div>

      <h3 className={styles.title}>{product.title}</h3>

      <div className={styles.price}>
        {product.price.toLocaleString("cs-CZ")} Kč
      </div>
    </article>
  );
}
