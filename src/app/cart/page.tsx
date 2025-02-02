"use client";
import { useCart } from "@/context/cartContext";
import { Minus, Plus, Trash2Icon } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b-2 border-orange-300/75 py-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-orange-500">${item.price}</p>

                {/* Quantity Selector */}
                <div className="flex gap-2 items-center mt-2 border border-orange-500 rounded-full w-fit">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 rounded  font-semibold hover:text-orange-500"
                  >
                    <Minus />
                  </button>
                  <span className="text-orange-500 font-bold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 rounded font-semibold hover:text-orange-500"
                  >
                    <Plus />
                  </button>
                </div>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                <Trash2Icon />
              </button>
            </div>
          ))}
          <h1 className="flex justify-end items-center pt-3 font-semibold">
            Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)}{" "}
            items) &nbsp;
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent text-lg font-semibold">
              : $
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </h1>

          {/* Cart Actions */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Clear Cart
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
