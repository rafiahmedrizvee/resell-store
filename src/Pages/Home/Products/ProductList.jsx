import React, { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";

const ProductList = ({ category, onBack }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        const transformedData = data.map((item, index) => ({
          id: index + 1,
          name: `${category.name} ${index + 1}`,
          img: item.thumbnailUrl,
          originalPrice: `$${1000 - index * 100}`,
          resellPrice: `$${800 - index * 80}`,
          yearsOfUse: index + 1,
          condition: index % 2 === 0 ? "Good" : "Excellent",
        }));
        setProducts(transformedData);
      });
  }, [category]);

  return (
    <div className="p-4">
      {!selectedProduct ? (
        <>
          <button
            className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={onBack}
          >
            Back
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
              </div>
            ))}
          </div>
        </>
      ) : (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
