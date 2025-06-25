import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContextApi } from "../../../Context/CartContext";

const Payment = () => {
     
    
        const { cart, setCart } = useContext(CartContextApi);
         const { initialCart } = useLoaderData() || {};
       
  return (
    <div>
      <h1>payment for product  <span className="text-2xl font-bold">{name}</span></h1>
      <p>Please Pay <b>{resellPrice} </b>for </p>

    </div>
  );
};

export default Payment;
