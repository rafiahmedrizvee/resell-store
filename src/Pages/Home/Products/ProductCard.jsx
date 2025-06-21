import React from "react";

const ProductCard = ({ category, onClick }) => {
  return (
    <div
      className="relative bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden mb-6"
      onClick={onClick}
    >
      <img
        src={category.img}
        alt={category.name}
        className="w-full h-48 object-contain mb-4 transition duration-300 transform hover:scale-110"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">
        
          {category.name}
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;

// import React from "react";

// const ProductCard = ({ product, onClick }) => {
//   return (
//     <div
//        className="relative bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden mb-6"
//       onClick={onClick}
//     >
//       <img
//         src={product.img}
//         alt={product.name}
//         className="w-full h-48 object-contain mb-4 transition duration-300 transform hover:scale-110"
//       />
//
//     </div>
//   );
// };

// export default ProductCard;
