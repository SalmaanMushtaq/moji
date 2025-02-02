import ProductPage from "@/components/product-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moji | Product Detail",
  description: "A modern shopping app Moji",
};

// Define the Product Type
interface SingleProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}
type tParams = Promise<{ category: string; id: string }>;
export default async function ProductDetail({ params }: { params: tParams }) {
  const param = await params;

  // Fetch product details
  const res = await fetch(`https://fakestoreapi.com/products/${param.id}`);
  if (!res.ok) throw new Error("Failed to fetch product data");
  const product: SingleProduct = await res.json();

  // Fetch related products (same category, excluding current product)
  const relatedRes = await fetch(
    `https://fakestoreapi.com/products/category/${param.category}`
  );
  if (!relatedRes.ok) throw new Error("Failed to fetch related products");
  let relatedProducts: SingleProduct[] = await relatedRes.json();

  relatedProducts = relatedProducts
    .filter((p) => p.id !== parseInt(param.id))
    .slice(0, 4);

  return (
    <ProductPage
      product={product}
      category={param.category}
      thumbnails={[product.image]}
      relatedProducts={relatedProducts}
    />
  );
}
