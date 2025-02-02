import ProductList from "@/components/product-list";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Moij | Women",
  description: "A modern shopping app Moji",
};
export default async function Women() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const products = await res.json();
  return <ProductList products={products} />;
}
