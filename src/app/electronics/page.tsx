import ProductList from "@/components/product-list";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Moji | Electronics",
  description: "A modern shopping app Moji",
};

export default async function Electronics() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const products = await res.json();
  return <ProductList products={products} />;
}
