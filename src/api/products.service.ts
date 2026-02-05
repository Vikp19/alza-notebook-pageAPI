import { post } from "./http";
import { mapAlzaProductToCard } from "./products.mapper";
import type { AlzaProductsResponse, ProductCard } from "./products.types";

const ALZA_PRODUCTS_URL = "/alza-api/Services/RestService.svc/v2/products";

export interface GetProductsParams {
  categoryId: number;
  page?: number;
}

export async function getProductCards(
  params: GetProductsParams,
): Promise<ProductCard[]> {
  const response = await post<AlzaProductsResponse>(ALZA_PRODUCTS_URL, {
    filterParameters: {
      id: params.categoryId,
      isInStockOnly: false,
      newsOnly: false,
      wearType: 0,
      orderBy: 0,
      page: params.page ?? 1,
      params: [],
      producers: [],
      sendPrices: true,
      type: "action",
      typeId: "",
      branchId: "",
    },
  });

  if (response.err > 0) {
    throw new Error(response.msg ?? "Alza API error");
  }

  return response.data.map(mapAlzaProductToCard);
}
