import { Coupon } from '../../../types';
import { initialCoupon } from '../../const/initialState';
import { useCouponForm } from '../../hooks/useCouponForm';
import { CouponList } from './CouponList';

interface Props {
  coupons: Coupon[];
  onCouponAdd: (newCoupon: Coupon) => void;
}

export const CouponManager = ({ coupons, onCouponAdd }: Props) => {
  const { newCoupon, resetCouponForm, setCouponForm } =
    useCouponForm(initialCoupon);

  const handleAddCoupon = () => {
    onCouponAdd(newCoupon);
    resetCouponForm();
  };

  const handleChange = (key: string, value: any) => {
    setCouponForm(key, value);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="space-y-2 mb-4">
          <input
            type="text"
            placeholder="쿠폰 이름"
            value={newCoupon.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="쿠폰 코드"
            value={newCoupon.code}
            onChange={(e) => handleChange('code', e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-2">
            <select
              value={newCoupon.discountType}
              onChange={(e) =>
                handleChange(
                  'discountType',
                  e.target.value as 'amount' | 'percentage'
                )
              }
              className="w-full p-2 border rounded"
            >
              <option value="amount">금액(원)</option>
              <option value="percentage">할인율(%)</option>
            </select>
            <input
              type="number"
              placeholder="할인 값"
              value={newCoupon.discountValue}
              onChange={(e) =>
                handleChange('discountValue', parseInt(e.target.value))
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={handleAddCoupon}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            쿠폰 추가
          </button>
        </div>
        <CouponList coupons={coupons} />
      </div>
    </div>
  );
};
