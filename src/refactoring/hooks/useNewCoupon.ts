import { Coupon } from '../../types.ts';
import { useState } from 'react';

export const useNewCoupon = (initialCoupon: Coupon) => {
  const [newCoupon, setNewCoupon] = useState<Coupon>(initialCoupon);

  const resetCouponInfo = () => {
    setNewCoupon(initialCoupon);
  };
  const setCouponInfo = (key: string, value: any) => {
    setNewCoupon((prevNewCompon) => {
      return {
        ...prevNewCompon,
        [key]: value,
      };
    });
  };
  return { newCoupon, resetCouponInfo, setCouponInfo };
};
