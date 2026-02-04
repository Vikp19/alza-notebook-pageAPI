import type { AlzaProductApi, ProductCard } from "./products.types";

function parsePrice(value: string | null): number | undefined {
  if (!value) return undefined;

  const normalized = value
    .replace(/&nbsp;/g, "")
    .replace(/[^\d,]/g, "")
    .replace(",", ".");

  const numberValue = Number(normalized);
  return Number.isFinite(numberValue) ? numberValue : undefined;
}

export function mapAlzaProductToCard(api: AlzaProductApi): ProductCard {
  const price = parsePrice(api.price);

  if (price == null) {
    throw new Error(`Invalid price for product id=${api.id}`);
  }

  return {
    id: api.id,
    title: api.name,
    description: api.spec,
    imageUrl: api.img,
    price,
    oldPrice: parsePrice(api.cprice),
    rating: api.rating,
    availability: api.avail,
    productUrl: api.url,
  };
}
