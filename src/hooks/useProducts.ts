import { useEffect, useState } from "react";
import { getProductCards } from "../api/products/products.service";
import type { ProductCard } from "../api/products/products.types";

const CATEGORY_ID = 18855843;

export function useProducts(page = 1) {
  const [products, setProducts] = useState<ProductCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const data = await getProductCards({
          categoryId: CATEGORY_ID,
          page,
        });

        if (isMounted) {
          setProducts(data);
        }
      } catch (e) {
        if (isMounted) {
          setError((e as Error).message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, [page]);

  return { products, loading, error };
}
