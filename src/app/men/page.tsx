import ProductList from "@/components/product-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moij | Men",
  description: "A modern shopping app Moji",
};
export default async function Men() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const products = await res.json();
  return <ProductList products={products} />;
}
