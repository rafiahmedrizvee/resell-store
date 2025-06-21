import { getStoredProduct } from "../Utilities/fakedb";


export const productsAndCartLoader = async () => {
    // Fetch all products and men products data
    const productData = await fetch("mobiles.json");
    const menProductData = await fetch("laptop.json");
    // const womenProductData = await fetch("http://localhost:7000/women-products");
    // const childrenProductData = await fetch("http://localhost:7000/child-products");
    // const accessoriesProductData = await fetch("http://localhost:7000/accessories-products");

    // Parse the JSON data
    const products = await productData.json();
    const menProducts = await menProductData.json();
    // const womenProducts = await womenProductData.json();
    // const childrenProducts = await childrenProductData.json();
    // const accessoriesProducts = await accessoriesProductData.json();


    const allProducts = [...products, ...menProducts];


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


