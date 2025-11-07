import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 animate-fadeIn">

      <h2 className="text-xl font-bold text-green-700 dark:text-green-400">{product.name}</h2>
      <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
      <div className="flex justify-between mt-3">
        <span className="text-sm text-gray-800 dark:text-gray-200">₹{product.price}</span>
        <div className="flex items-center gap-2">
  <span className="text-xs bg-green-200 text-green-900 px-2 py-1 rounded">
    Eco Score: {product.ecoScore}
  </span>
  {(product.ecoScore === "A++" || product.ecoScore === "A+") && (
    <span className="text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded">
      ✅ Trusted
    </span>
  )}
</div>

      </div>
    </div>
  );
};

export default ProductCard;
