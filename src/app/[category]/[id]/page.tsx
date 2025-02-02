import { SingleProduct } from "@/app/page";
import ProductPage from "@/components/product-page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Moji | Product Detail",
  description: "A modern shopping app Moji",
};

export default async function ProductDetail({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { category, id } = await params;

  // Fetch product details
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  // Fetch related products (same category, excluding current product)
  const relatedRes = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  let relatedProducts = await relatedRes.json();
  relatedProducts = relatedProducts
    .filter((p: SingleProduct) => p.id !== parseInt(id))
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
