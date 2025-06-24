import React, { useContext, useEffect, useState, } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faAngleUp, faCircleXmark, } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';

import { deleteShoppingCart, removeFromDb } from '../../../Utilities/fakedb';
import { CartContextApi } from '../../../Context/CartContext';



const MyOrder = () => {
    const {cart, setCart } = useContext(CartContextApi);
    const { initialCart } = useLoaderData() || {};
    // const [cart, setCart] = useState(initialCart || []);
    // console.log(cart);

    let total = 0;
    let subTotal = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        subTotal = total + product.resellPrice * product.quantity;
        total = total + product.resellPrice * product.quantity;


    }
   const handleRemoveItem = (id) => {
        const removeItem = cart.filter(product => product.id !== id);
        setCart(removeItem);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

       /*  Scrollbar */
   const [isVisible, setIsVisible] = useState(false);
      const toggleVisibility = () => {
          if (window.pageYOffset > 100) {
              setIsVisible(true);
          } else {
              setIsVisible(false);
          }
      };
  
      const scrollToTop = () => {
          window.scrollTo({
              top: 0,
              behavior: "smooth",
          });
      };
  
      useEffect(() => {
          window.addEventListener("scroll", toggleVisibility);
  
          return () => {
              window.removeEventListener("scroll", toggleVisibility);
          };
      }, []);
    return (
        <div className='h-auto flex justify-center items-center py-10 mx-5  '>
            <div className='w-auto  lg:w-[1100px] xl:w-[1200px] h-auto shadow px-5 rounded-lg border'>
                <div>
                    <h1 className='mx-1 my-6 font-bold text-2xl'>Shopping Cart</h1>
                </div>
                <div className='md:flex  justify-between hidden items-center bg-[#f5f7f9] h-10 px-3 my- rounded-md'>
                    <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] flex pl-'>
                        <p>Image</p>
                    </div>
                    <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] hidden lg:flex justify-center'>
                        <p>Product Name</p>
                    </div>
                    <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] flex justify-center'>
                        <p>Quantity</p>
                    </div>
                    <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] flex justify-center'>
                        <h1>Price</h1>
                    </div>
                    <div className='w-[60px] md:w-[80px] lg:w-[90px] xl:w-[110px] 2xl:w-[230px] flex justify-center '>
                        <h1>Remove</h1>
                    </div>
                </div>

                {cart.map((product) => (
                    <div key={product.id} className='flex w-full  2xl:w-[1100px] justify-between items-center border shadow-md rounded-lg my-4'>
                        <div className=' w-[70px] md:w-[100px] lg:w-[110px] 2xl:w-[230px] '>
                            <img className='w-[70px] md:w-[100px] lg:w-[110px] md:h-[100px] 2xl:w-[120px] h-[70px] 2xl:h-[120px] object-contain' src={product.img} alt="" />
                        </div>
                        <div className='w-[70px] md:w-[80px] xl:w-[110px] lg:w-[110px] 2xl:w-[230px] hidden lg:flex justify-center'>
                            <h1>{product.details}</h1>
                        </div>
                        <div className='w-[70px] md:w-[80px] xl:w-[110px] lg:w-[110px] 2xl:w-[230px] flex justify-center'>
                            <h1> {product.quantity}</h1>
                        </div>
                        <div className='w-[70px] md:w-[80px] xl:w-[110px] lg:w-[110px] 2xl:w-[230px] flex justify-center'>
                            <h1>TK {product.resellPrice} </h1>
                        </div>
                        <div className='w-[70px] md:w-[80px] xl:w-[110px] lg:w-[110px] 2xl:w-[230px] flex justify-center 0'>
                            <button onClick={() => handleRemoveItem(product.id)}>{<FontAwesomeIcon className='w-5 md:w-6 md:h-6 lg:w-7 lg:h-7 h-5 md:mr-4 ' icon={faCircleXmark} />}</button>
                        </div>
                    </div>
                ))}

                


              
                       
                  
                    <div className=' my-20 gap-2'>
                        <div className='flex justify-center items-center'>
                            <button className='btn btn-primary text-white md:w-[160px] rounded-sm'><Link to="/home">Continue Shopping</Link></button>
                        </div>
                     
                    </div>
                </div>
            </div>

             
        
     
    );
};

export default MyOrder;
