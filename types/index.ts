export type BrandState = "all" | "checkmate" | "emotions";

export type GarmentCategory = "tee" | "hoodie" | "longsleeve" | "headwear" | "capsule";

export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: "checkmate" | "emotions";
  category: GarmentCategory;
  price: number;
  originalPrice?: number;
  image: string;
  lifestyleImage?: string;
  gsm: string;
  fabric: string;
  color: string;
  edition: string;
  description: string;
  details: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  size: "S" | "M" | "L" | "XL" | "XXL";
  quantity: number;
}
