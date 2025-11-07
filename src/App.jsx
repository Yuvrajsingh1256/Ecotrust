import React, { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [ecoFilter, setEcoFilter] = useState("All");

  const filteredProducts = products.filter((p) => {
    const ecoMatch = ecoFilter === "All" || p.ecoScore === ecoFilter;
    const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return ecoMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-green-900 dark:text-green-300 mb-4">
        EcoTrust Retail Dashboard
      </h1>

      {/* Dark mode toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="px-4 py-2 text-sm rounded bg-gray-800 text-white dark:bg-yellow-400 dark:text-black"
        >
          Toggle Dark Mode
        </button>
      </div>

      {/* Secure banner */}
      <div className="bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 p-4 rounded-lg text-center mb-6">
        🔐 All purchases are protected with end-to-end encryption.
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded border border-green-500 w-full md:w-1/3"
        />

        <select
          value={ecoFilter}
          onChange={(e) => setEcoFilter(e.target.value)}
          className="p-2 rounded border border-green-500"
        >
          <option value="All">All Eco Scores</option>
          <option value="A++">A++</option>
          <option value="A+">A+</option>
          <option value="A">A</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} onClick={() => setSelected(product)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default App;
