import { useState } from 'react';
import { Product } from '../../../types';
import { initialProduct } from '../../const/initialState';
import { useProductForm } from '../../hooks/useProductForm';
import { NewProductForm } from './NewProductForm';
import { ProductItem } from './ProductItem';

interface Props {
  products: Product[];
  onProductUpdate: (updatedProduct: Product) => void;
  onProductAdd: (newProduct: Product) => void;
}

export const ProductManager = ({
  products,
  onProductUpdate,
  onProductAdd,
}: Props) => {
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  const { newProduct, setProductForm, resetProductForm } =
    useProductForm(initialProduct);

  const handleChange = (key: keyof Product, value: any) => {
    setProductForm(key, value);
  };
  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    onProductAdd(productWithId);
    resetProductForm();
    setShowNewProductForm(false);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 관리</h2>
      <button
        onClick={() => setShowNewProductForm(!showNewProductForm)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        {showNewProductForm ? '취소' : '새 상품 추가'}
      </button>
      {showNewProductForm && (
        <NewProductForm
          newProduct={newProduct}
          handleChange={handleChange}
          handleAddNewProduct={handleAddNewProduct}
          resetProductForm={resetProductForm}
          setShowNewProductForm={setShowNewProductForm}
        />
      )}
      <div className="space-y-2">
        {products.map((product, index) => (
          <ProductItem
            key={product.id}
            index={index}
            product={product}
            onProductUpdate={onProductUpdate}
            products={products}
          />
        ))}
      </div>
    </div>
  );
};
