import { getStoredProduct } from "../Utilities/fakedb";

export const productsAndCartLoader = async () => {
  // Fetch all products and men products data
  const mobilesData = await fetch(
    "https://resell-server-kappa.vercel.app/mobile"
  );
  const laptopsData = await fetch(
    "https://resell-server-kappa.vercel.app/laptop"
  );
  const tvsData = await fetch("https://resell-server-kappa.vercel.app/tv");
  const allCategoryData = await fetch(
    "https://resell-server-kappa.vercel.app/all-category"
  );
  // const womenProductData = await fetch("https://resell-server-kappa.vercel.app/women-products");
  // const childrenProductData = await fetch("https://resell-server-kappa.vercel.app/child-products");
  // const accessoriesProductData = await fetch("https://resell-server-kappa.vercel.app/accessories-products");

  // Parse the JSON data
  const mobiles = await mobilesData.json();
  const laptops = await laptopsData.json();
  // const tvs = await tvsData.json();
  // const allCategory = await allCategoryData.json();
  // const womenProducts = await womenProductData.json();
  // const childrenProducts = await childrenProductData.json();
  // const accessoriesProducts = await accessoriesProductData.json();

  const allProducts = [...mobiles, ...laptops];

  const savedCart = getStoredProduct();
  const initialCart = [];

  for (const id in savedCart) {
    const addedProduct = allProducts.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }

  return { products: allProducts, initialCart: initialCart };
};
