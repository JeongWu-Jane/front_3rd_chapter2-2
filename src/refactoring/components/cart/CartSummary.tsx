import { CartItem, Coupon } from '../../../types';
import { calculateTotal } from '../../hooks/utils/cartUtils';
import { CartListItem } from './CartListItem';
import { CouponApply } from './CouponApply';
import { TotalSummary } from './TotalSummary';

interface Props {
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  applyCoupon: (coupon: Coupon) => void;
  selectedCoupon: Coupon | null;
  cart: CartItem[];
  coupons: Coupon[];
}

export const CartSummary = ({
  cart,
  selectedCoupon,
  applyCoupon,
  updateQuantity,
  removeFromCart,
  coupons,
}: Props) => {
  const { totalBeforeDiscount, totalAfterDiscount, totalDiscount } =
    calculateTotal(cart, selectedCoupon);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
      <div className="space-y-2">
        {cart.map((item) => (
          <CartListItem
            key={item.product.id}
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      <CouponApply
        coupons={coupons}
        applyCoupon={applyCoupon}
        selectedCoupon={selectedCoupon}
      />

      <TotalSummary
        totalBeforeDiscount={totalBeforeDiscount}
        totalDiscount={totalDiscount}
        totalAfterDiscount={totalAfterDiscount}
      />
    </div>
  );
};
