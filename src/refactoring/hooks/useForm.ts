import { useState } from 'react';

export const useForm = <T>(initialData: T) => {
  // 제너릭 타입 T 추가
  const [formData, setFormData] = useState<T>(initialData); // 상태에 제너릭 타입 사용

  const resetData = () => {
    setFormData(initialData);
  };

  const setData = (key: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return { formData, resetData, setData };
};
