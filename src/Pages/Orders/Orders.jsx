// import React, { useContext, useEffect, useState, } from 'react';
// import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
// import { faAngleUp, faCircleXmark, } from '@fortawesome/free-solid-svg-icons';
// import { Link, useLoaderData } from 'react-router-dom';
// import { deleteShoppingCart, removeFromDb } from '../../Utilities/fakedb';
// import { CartContextApi } from '../../Context/CartContext';



// const Orders = () => {
//     const {cart, setCart } = useContext(CartContextApi);
//     const { initialCart } = useLoaderData() || {};
//     // const [cart, setCart] = useState(initialCart || []);
//     // console.log(cart);

//     let total = 0;
//     let subTotal = 0;
//     let quantity = 0;
//     for (const product of cart) {
//         quantity = quantity + product.quantity;
//         subTotal = total + product.resellPrice * product.quantity;
//         total = total + product.resellPrice * product.quantity;


//     }
//    const handleRemoveItem = (id) => {
//         const removeItem = cart.filter(product => product.id !== id);
//         setCart(removeItem);
//         removeFromDb(id);
//     }
//     const clearCart = () => {
//         setCart([]);
//         deleteShoppingCart();
//     }

//        /*  Scrollbar */
//    const [isVisible, setIsVisible] = useState(false);
//       const toggleVisibility = () => {
//           if (window.pageYOffset > 100) {
//               setIsVisible(true);
//           } else {
//               setIsVisible(false);
//           }
//       };
  
//       const scrollToTop = () => {
//           window.scrollTo({
//               top: 0,
//               behavior: "smooth",
//           });
//       };
  
//       useEffect(() => {
//           window.addEventListener("scroll", toggleVisibility);
  
//           return () => {
//               window.removeEventListener("scroll", toggleVisibility);
//           };
//       }, []);
//     return (
//         <div className='h-auto flex justify-center items-center py-10 mx-5  '>
//             <div className='w-auto  lg:w-[1100px] xl:w-[1200px] h-auto shadow px-5 rounded-lg border'>
//                 <div>
//                     <h1 className='mx-1 my-6 font-bold text-2xl'>Shopping Cart</h1>
//                 </div>
//                 <div className='md:flex  justify-between hidden items-center bg-[#f5f7f9] h-10 px-3 my- rounded-md'>
//                     <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] flex pl-'>
//                         <p>Image</p>
//                     </div>
//                     <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] hidden lg:flex justify-center'>
//                         <p>Product Name</p>
//                     </div>
//                     <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] flex justify-center'>
//                         <p>Quantity</p>
//                     </div>
//                     <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] flex justify-center'>
//                         <h1>Price</h1>
//                     </div>
//                     <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] flex justify-center '>
//                         <h1>Remove</h1>
//                     </div>
//                 </div>

//                 {cart.map((product) => (
//                     <div key={product.id} className='flex w-full  2xl:w-[1100px] justify-between items-center border shadow-md rounded-lg my-4'>
//                         <div className=' w-[70px] md:w-[100px] lg:w-[110px] 2xl:w-[230px] '>
//                             <img className='w-[70px] md:w-[100px] lg:w-[110px] md:h-[100px] 2xl:w-[120px] h-[70px] 2xl:h-[120px] object-contain' src={product.img} alt="" />
//                         </div>
//                         <div className='w-[70px] md:w-[80px] xl:w-[110px] lg:w-[110px] 2xl:w-[230px] hidden lg:flex justify-center'>
//                             <h1>{product.details}</h1>
//                         </div>
//                         <div className='w-[70px] md:w-[80px] xl:w-[110px] lg:w-[110px] 2xl:w-[230px] flex justify-center'>
//                             <h1> {product.quantity}</h1>
//                         </div>
//                         <div className='w-[70px] md:w-[80px] xl:w-[110px] lg:w-[110px] 2xl:w-[230px] flex justify-center'>
//                             <h1>TK {product.resellPrice} </h1>
//                         </div>
//                         <div className='w-[70px] md:w-[80px] xl:w-[110px] lg:w-[110px] 2xl:w-[230px] flex justify-center 0'>
//                             <button onClick={() => handleRemoveItem(product.id)}>{<FontAwesomeIcon className='w-5 md:w-6 md:h-6 lg:w-7 lg:h-7 h-5 md:mr-4 ' icon={faCircleXmark} />}</button>
//                         </div>
//                     </div>
//                 ))}

//                 <div className='md:flex md:justify-between my-7 md:mx-10 '>
//                     <div>
//                         {/* Empty Div */}
//                     </div>
//                     <div className=''>
//                         <div className=" flex justify-between items-center py-2  md:w-64">
//                             <div className="text-xl md:text-2xl font-normal text-gray-800">Total Selected Item :</div>
//                             <div className="text-xl md:text-2xl font-normal text-red-500">{quantity}</div>
//                         </div>
//                         <hr className="border-gray-300 w-full md:w-64" />
//                         <div className="flex justify-between items-center py-2 md:w-64">
//                             <div className="text-xl md:text-2xl font-normal text-gray-800">Sub-Total:</div>
//                             <div className="text-xl md:text-2xl font-normal text-red-500">TK {subTotal}</div>
//                         </div>
//                         <hr className="border-gray-300 w-full md:w-64" />
//                         <div className="flex justify-between items-center py-2 md:w-64">
//                             <div className="text-xl md:text-2xl font-normal text-gray-800">Total:</div>
//                             <div className="text-xl md:text-2xl font-normal text-red-500">TK {total} </div>
//                         </div>
//                         <hr className="border-gray-300 w-full md:w-64" />
//                         <div className=" font-bold flex  justify-center items-center">
//                             <button onClick={clearCart} className=' btn btn-primary text-white md:w-[170px] rounded-sm my-6'>Clear All Products</button>
//                         </div>
//                     </div>
//                 </div>


//                 <div className='md:my-32 '>
//                     <div className='my-4 mx-2'>
//                         <h1 className='font-bold text-xl'>What would you like to do next?</h1>
//                         <p className=' my-1'>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
//                     </div>
//                     <div className='md:flex justify-between items-center bg-[#f1f5f9] h-[110px] md:h-[80px]  rounded-lg'>
//                         <div className='flex md:mx-5 items-center my-2 md:my-0'>
//                             <div>
//                                 <input className='w-[150px]  input  input-bordered font-bold  bg-transparent' type="text" placeholder='Promo / Coupon Code' />
//                             </div>
//                             <div>
//                                 <button className=' btn border-none btn-primary mx-2 btn-outline rounded-sm ring-2 ring-[#3749bb]'>Apply Coupon</button>
//                             </div>
//                         </div>
//                         <div className='flex md:mx-5 items-center'>

//                             <div>
//                                 <input className='w-[150px] input input-bordered font-bold  bg-[#f3f5f7]' type="text" placeholder='Enter your gift voucher code here' />
//                             </div>
//                             <div>
//                                 <button className='btn border-none btn-primary mx-2 btn-outline rounded-sm ring-2 ring-[#3749bb]'>Apply Voucher</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex justify-between my-20 gap-2'>
//                         <div>
//                             <button className='btn btn-primary text-white md:w-[160px] rounded-sm'><Link to="/home">Continue Shopping</Link></button>
//                         </div>
//                         <div>
//                             <button className='btn btn-primary text-white  md:w-[160px] rounded-sm'>Confirm Order</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//               <div>
//                 {/* Scroll to top button */}
//                 {isVisible && (
//                     <button
//                         onClick={scrollToTop}
//                         className="flex justify-center items-center fixed bottom-12 right-12 p-3 h-[55px] object-cover w-[55px] bg-gray-300 font-bold hover:text-white  rounded-full shadow-lg hover:bg-black transition-all"
//                     >
//                         <FontAwesomeIcon className='w-9 h-5 font-bold' icon={faAngleUp} />
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Orders;

import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../Utilities/fakedb";
import { CartContextApi } from "../../Context/CartContext";

const Orders = () => {
  const { cart, setCart } = useContext(CartContextApi);
  const { initialCart } = useLoaderData() || {};

  // Ensure cart state is initialized from loader
  useEffect(() => {
    if (initialCart && initialCart.length) {
      setCart(initialCart);
    }
  }, [initialCart, setCart]);

  // Calculate totals
  const { total, quantity } = cart.reduce(
    (acc, product) => {
      const productTotal = product.resellPrice * product.quantity;
      acc.quantity += product.quantity;
      acc.total += productTotal;
      return acc;
    },
    { total: 0, quantity: 0 }
  );

  // Remove item from cart
  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    removeFromDb(id);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  // Scroll-to-top functionality
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(window.pageYOffset > 100);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="h-auto flex justify-center items-center py-10 mx-5">
      <div className="w-full lg:w-[1100px] xl:w-[1200px] shadow px-5 rounded-lg border">
        <h1 className="font-bold text-2xl my-6">Shopping Cart</h1>
        <div className="hidden md:flex justify-between items-center bg-gray-100 h-10 px-3 rounded-md">
          <p>Image</p>
          <p>Product Name</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove</p>
        </div>

        {cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center border shadow-md rounded-lg my-4 p-4"
          >
            <img
              className="w-16 h-16 object-contain"
              src={product.img}
              alt={product.details}
            />
            <p className="w-20">{product.details}</p>
            <p>{product.quantity}</p>
            <p>TK {product.resellPrice}</p>
            <button onClick={() => handleRemoveItem(product._id)}>
              <FontAwesomeIcon icon={faCircleXmark} className="text-red-500" />
            </button>
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between items-center my-7">
          <div className="w-full md:w-1/3">
            <p>Total Selected Items: {quantity}</p>
            <p>Total: TK {total}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={clearCart}
              className="btn btn-primary text-white rounded-sm"
            >
              Clear Cart
            </button>
            <Link to="/home" className="btn btn-primary rounded-sm">
              Continue Shopping
            </Link>
          </div>
        </div>

        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 p-3 bg-gray-700 text-white rounded-full shadow-lg"
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Orders;
