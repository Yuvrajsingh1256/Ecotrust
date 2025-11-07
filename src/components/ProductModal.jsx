import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="mb-2">{product.description}</p>
        <p className="font-semibold">Price: ₹{product.price}</p>
        <p>Eco Score: {product.ecoScore}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
