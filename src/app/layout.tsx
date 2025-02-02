"use client";
import "./globals.css";
import Navigation from "@/components/navigation";
import { CartProvider } from "@/context/cartContext";
import CartIcon from "@/components/cart-icon";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MoonLoader } from "react-spinners";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>Moji| Home</title>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <CartProvider>
          <Toaster richColors />
          {/* Fixed Header */}
          <header className="p-4 fixed top-0 w-full bg-gray-100 shadow-sm flex justify-between items-center px-4 md:px-8 z-50">
            <Navigation />
            <CartIcon />
          </header>

          {/* Main Content (Takes Remaining Height) */}
          <main className="flex-grow px-4 md:px-8 mt-24 pb-4">
            {loading ? (
              <div className="h-[calc(100vh-120px)] flex justify-center items-center">
                <MoonLoader color="#f97316 " />
              </div>
            ) : (
              children
            )}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
