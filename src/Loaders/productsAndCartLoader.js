// import { getStoredProduct } from "../Utilities/fakedb";

// export const productsAndCartLoader = async () => {
//   // Fetch all products and men products data
//   const mobilesData = await fetch("https://mobile-store-phi.vercel.app/mobile");
//   const laptopsData = await fetch("https://mobile-store-phi.vercel.app/laptop");
//   const tvsData = await fetch("https://mobile-store-phi.vercel.app/tv");
//   const allCategoryData = await fetch(
//     "https://mobile-store-phi.vercel.app/all-category"
//   );


//   // Parse the JSON data
//   const mobiles = await mobilesData.json();
//   const laptops = await laptopsData.json();
//   const tvs = await tvsData.json();
//   const allCategory = await allCategoryData.json();
//   // const womenProducts = await womenProductData.json();
//   // const childrenProducts = await childrenProductData.json();
//   // const accessoriesProducts = await accessoriesProductData.json();

//   const allProducts = [...mobiles, ...laptops,...allCategory,...tvs];

//   const savedCart = getStoredProduct();
//   const initialCart = [];

//   for (const id in savedCart) {
//     const addedProduct = allProducts.find((product) => product.id === id);
//     if (addedProduct) {
//       const quantity = savedCart[id];
//       addedProduct.quantity = quantity;
//       initialCart.push(addedProduct);
//     }
//   }

//   return { products: allProducts, initialCart: initialCart };
// };

import { getStoredProduct } from "../Utilities/fakedb";

export const productsAndCartLoader = async () => {
  try {
    // Fetch data for all categories
    const [mobilesRes, laptopsRes, tvsRes, allCategoryRes] = await Promise.all([
      fetch("https://mobile-store-phi.vercel.app/mobile"),
      fetch("https://mobile-store-phi.vercel.app/laptop"),
      fetch("https://mobile-store-phi.vercel.app/tv"),
      fetch("https://mobile-store-phi.vercel.app/categories"),
    ]);

    // Parse JSON responses
    const mobiles = await mobilesRes.json();
    const laptops = await laptopsRes.json();
    const tvs = await tvsRes.json();
    const allCategory = await allCategoryRes.json();

    // Combine all products
    const allProducts = [...mobiles, ...laptops, ...allCategory, ...tvs];

    // Load saved cart and initialize cart
    const savedCart = getStoredProduct();
    const initialCart = Object.keys(savedCart).reduce((cart, id) => {
      const product = allProducts.find((item) => item.id === id);
      if (product) {
        product.quantity = savedCart[id];
        cart.push(product);
      }
      return cart;
    }, []);

    return { products: allProducts, initialCart };
  } catch (error) {
    console.error("Error loading products and cart data:", error);
    return { products: [], initialCart: [] };
  }
};
