import { SingleProduct } from "../../next-env";
import Product from "./product";

export default function ProductList({
  products,
}: {
  products: SingleProduct[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
