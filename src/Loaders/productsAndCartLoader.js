import { getStoredProduct } from "../Utilities/fakedb";


export const productsAndCartLoader = async () => {
    // Fetch all products and men products data
    const mobilesData = await fetch("mobiles.json");
    const laptopData = await fetch("laptop.json");
    // const womenProductData = await fetch("http://localhost:7000/women-products");
    // const childrenProductData = await fetch("http://localhost:7000/child-products");
    // const accessoriesProductData = await fetch("http://localhost:7000/accessories-products");

    // Parse the JSON data
    const mobiles = await mobilesData.json();
    const laptops = await laptopData.json();
    // const womenProducts = await womenProductData.json();
    // const childrenProducts = await childrenProductData.json();
    // const accessoriesProducts = await accessoriesProductData.json();


    const allProducts = [...mobiles, ...laptops];


    const savedCart = getStoredProduct();
    const initialCart = [];


    for (const id in savedCart) {
        const addedProduct = allProducts.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: allProducts, initialCart: initialCart };
}


