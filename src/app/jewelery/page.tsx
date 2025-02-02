import ProductList from "@/components/product-list";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Moji | Jewelery",
  description: "A modern shopping app Moji",
};

export default async function Jewelery() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const products = await res.json();
  return <ProductList products={products} />;
}
