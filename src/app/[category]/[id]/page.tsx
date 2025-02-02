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

// ✅ Remove the custom `ProductDetailProps` type and let Next.js handle it
export default async function ProductDetail({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { category, id } = params;

  // Fetch product details
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product data");
  const product: SingleProduct = await res.json();

  // Fetch related products (same category, excluding current product)
  const relatedRes = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  if (!relatedRes.ok) throw new Error("Failed to fetch related products");
  let relatedProducts: SingleProduct[] = await relatedRes.json();

  relatedProducts = relatedProducts
    .filter((p) => p.id !== parseInt(id))
    .slice(0, 4);

  return (
    <ProductPage
      product={product}
      category={category}
      thumbnails={[product.image]}
      relatedProducts={relatedProducts}
    />
  );
}
