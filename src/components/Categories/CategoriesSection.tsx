import { useState } from "react";
import { CATEGORIES } from "./categories.config";
import styles from "./CategoriesSection.module.css";

export function CategoriesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className={styles.wrapper}>
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          type="button"
          className={
            category.id === activeId
              ? `${styles.button} ${styles.active}`
              : styles.button
          }
          onClick={() => setActiveId(category.id)}
        >
          {category.label}
        </button>
      ))}
    </section>
  );
}
