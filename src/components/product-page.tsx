"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

export default function ProductPage({
  product,
  category,
  thumbnails,
  relatedProducts,
}: any) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div>
          <div className="border-2 border-orange-500 p-2 rounded-md flex justify-center items-center">
            <Image
              src={selectedImage}
              alt={product.title}
              className="max-h-80 object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4 justify-center">
            {thumbnails.map((thumb: string, index: number) => (
              <button
                key={index}
                className={`border-2 p-1 rounded-md ${
                  selectedImage === thumb
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(thumb)}
              >
                <Image
                  src={thumb}
                  alt={`Thumbnail ${index}`}
                  className="w-16 h-16 object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <p className="uppercase text-orange-500 font-semibold tracking-wide">
            {category}
          </p>
          <h1 className="text-3xl font-bold mt-2">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Price */}
          <div className="mt-4 flex items-center gap-4">
            <p className="text-2xl font-semibold text-orange-500">
              ${product.price}
            </p>
            <p className="text-lg line-through text-gray-400">
              ${(product.price / 0.5).toFixed(2)}
            </p>
            <span className="bg-orange-100 text-orange-500 px-2 py-1 text-sm font-semibold rounded-md">
              50% Off
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="flex gap-2 items-center mt-2 border border-orange-500 rounded-full w-fit">
            <button
              className="px-3 py-1 rounded  font-semibold hover:text-orange-500"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <Minus />
            </button>
            <span className="text-orange-500 font-bold">{quantity}</span>
            <button
              className="px-3 py-1 rounded  font-semibold hover:text-orange-500"
              onClick={() => setQuantity((q) => q + 1)}
            >
              <Plus />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-6 w-full bg-orange-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related: any) => (
            <div
              key={related.id}
              className="border p-4 rounded-md shadow-md hover:shadow-lg transition"
            >
              <Link href={`/${category}/${related.id}`}>
                <Image
                  src={related.image}
                  alt={related.title}
                  className="h-32 object-contain mx-auto"
                />
                <h3 className="mt-2 text-lg font-semibold line-clamp-1">
                  {related.title}
                </h3>
                <p className="text-orange-500 font-bold">${related.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
