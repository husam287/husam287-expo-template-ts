import { PaginationParams } from "./general";

export interface GetAllProductParams extends PaginationParams {
  categorySlug?: string;
  subCategorySlug?: string;
  search?: string;
  topProduct?: 1 | 0;
  topSearch?: 1 | 0;
  ordering?: string;
  brand?: string;
  tagsSlug?: string;
}

export interface ProductImage {
  id: number;
  created: string;
  modified: string;
  image: string;
  product: number;
}

export interface ProductMeasureUnit {
  id: number;
  created: string;
  modified: string;
  name: string;
  ratio: number;
  limit_per_order: number;
}

export interface SubCategory {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  final_b2c_price: number;
  productimages: ProductImage[];
  product_measure_units: ProductMeasureUnit[];
  show_prices: boolean;
  sub_categories: SubCategory[];
  tags: Tag[];
  is_favorite_product: boolean;
  created: string;
  modified: string;
  slug: string;
  name: string;
  description: string;
  top_pics: boolean;
  new: boolean;
  show_in_b2b: boolean;
  show_in_b2c: boolean;
  order: number;
  price_b2b_before_discount: number;
  price_b2b: number;
  price_b2c: number;
  availability: boolean;
  stock: number;
  brand: number;
  sub_category: number;
}
