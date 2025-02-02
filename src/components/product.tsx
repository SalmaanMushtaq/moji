"use client";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import { SingleProduct } from "@/app/page";

interface ProductProps {
  product: SingleProduct;
}

export default function Product({ product }: ProductProps) {
  const { addToCart } = useCart();
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col bg-white">
      {/* Product Image */}
      <div className="h-48 flex justify-center items-center bg-gray-100 rounded-lg">
        <Image
          src={product.image}
          alt={product.title}
          className="h-full max-h-40 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2 mt-3">
        <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between text-orange-600 font-bold">
          <p className="text-xl">
            ${product.price} <span className="ps-5 text-orange-500">50%</span>
          </p>
          <p className="text-sm line-through text-gray-400">
            ${(product.price / 0.5).toFixed(2)}{" "}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
              })
            }
          >
            Add To Cart
          </button>
          <Link
            href={`/${product.category}/${product.id}`}
            className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition text-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
