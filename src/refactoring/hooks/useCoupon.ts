import { Coupon } from '../../types.ts';
import { useState } from 'react';

export const useCoupons = (initialCoupons: Coupon[]) => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  const [newCoupon, setNewCoupon] = useState<Coupon>({
    name: '',
    code: '',
    discountType: 'percentage',
    discountValue: 0,
  });

  const addCoupon = (newCoupon: Coupon) => {
    setCoupons((prevCoupons) => [...prevCoupons, newCoupon]);
  };

  // 새로운 쿠폰 추가하면, 쿠폰리스트에 추가하고, 현재 쿠폰 정보 초기화
  const addNewCoupon = () => {
    addCoupon(newCoupon);
    setNewCoupon({
      name: '',
      code: '',
      discountType: 'percentage',
      discountValue: 0,
    });
  };

  const addCouponInfo = (key: string, value: any) => {
    setNewCoupon((prevNewCompon) => {
      return {
        ...prevNewCompon,
        [key]: value,
      };
    });
  };

  return { coupons, addNewCoupon, newCoupon, addCouponInfo };
};
