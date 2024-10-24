import { Coupon, Product } from '../../../types.ts';
import { useCart, useCoupon } from '../../hooks/index.ts';
import { CartSummary } from './CartSummary.tsx';
import { ProductList } from './ProductList.tsx';

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const { applyCoupon, selectedCoupon } = useCoupon();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductList products={products} cart={cart} addToCart={addToCart} />
        <CartSummary
          coupons={coupons}
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          applyCoupon={applyCoupon}
          selectedCoupon={selectedCoupon}
        />
      </div>
    </div>
  );
};
