"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import ProductList from "@/components/product-list";
import { ClipLoader } from "react-spinners";
import Head from "next/head";

export interface SingleProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export default function Home() {
  const [products, setProducts] = useState<SingleProduct[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const loadMore = useCallback(() => {
    if (loading) return; // Prevent multiple requests
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, products.length));
      setLoading(false);
    }, 1000);
  }, [products.length, loading]);

  useEffect(() => {
    if (!loaderRef.current || products.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadMore, products.length]);

  return (
    <>
      {/* ✅ Metadata using next/head */}
      <Head>
        <title>Moji | Home</title>
        <meta
          name="description"
          content="Browse the latest products in Moji's store."
        />
        <meta
          name="keywords"
          content="ecommerce, shopping, Moji, online store"
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center">
        <ProductList products={products.slice(0, visibleCount)} />
        {/* Loader Trigger */}
        <div ref={loaderRef} className="h-10 flex items-center justify-center">
          {visibleCount < products.length && (
            <ClipLoader size={35} color={"#f97316"} loading={loading} />
          )}
        </div>
      </div>
    </>
  );
}
