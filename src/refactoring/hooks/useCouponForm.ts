import { useState } from 'react';
import { Coupon } from '../../types';

export const useCouponForm = (initialCoupon: Coupon) => {
  const [newCoupon, setNewCoupon] = useState<Coupon>(initialCoupon);

  const resetCouponForm = () => {
    setNewCoupon(initialCoupon);
  };

  const setCouponForm = (key: string, value: any) => {
    setNewCoupon((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { newCoupon, resetCouponForm, setCouponForm };
};
