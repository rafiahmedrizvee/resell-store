import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import phone from "../../../assets/watch/Blue.png"
import Laptop from "../../../assets/watch/laptop.png"
import Sony from "../../../assets/watch/sony.png"

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: "Laptop", img: Laptop },
    { id: 2, name: "Phone", img: phone },
    { id: 3, name: "TV", img: Sony },
  ];

  return (
    <div className="p-4">
      {!selectedCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <ProductCard
              key={category.id}
              category={category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      ) : (
        <ProductList
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
};

export default Product;





// import ProductCard from "./ProductCard";
// import ProductDetails from "./ProductDetails";


// const Product = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const products = 

//   return (
//     <div className="p-4">
//       {!selectedProduct ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onClick={() => setSelectedProduct(product)}
//             />
//           ))}
//         </div>
//       ) : (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={() => setSelectedProduct(null)}
//         />
//       )}
//     </div>
//   );
// };

// // export default Product;
