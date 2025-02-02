"use client";

import Link from "next/link";
import { useCart } from "@/context/cartContext";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="fixed bottom-6 right-6 bg-orange-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
    >
      <ShoppingCart /> <span>{totalItems}</span>
    </Link>
  );
}
