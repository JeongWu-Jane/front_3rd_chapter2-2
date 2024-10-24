import { useState } from 'react';
import { Product } from '../../types';

export const useProductForm = (initialProduct: Omit<Product, 'id'>) => {
  const [newProduct, setNewProduct] =
    useState<Omit<Product, 'id'>>(initialProduct);

  const setProductForm = (key: keyof Product, value: any) => {
    setNewProduct((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetProductForm = () => {
    setNewProduct(initialProduct);
  };
  return { newProduct, setProductForm, resetProductForm };
};
