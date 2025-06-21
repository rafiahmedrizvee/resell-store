// import React, { useState } from "react";
// import Laptop from "../Laptop/Laptop";

// const ProductDetails = ({ product, onBack }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleBooking = (e) => {
//     e.preventDefault();
//     alert(`Product booked successfully by ${name}!`);
//   };

//   return (
//    <div>
//          <div className="p-4">
//       <button
//         className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md"
//         onClick={onBack}
//       >
//         Back
//       </button>
//       <div className="grid md:grid-cols-2 gap-4">
//         <img
//           src={product.img}
//           alt={product.name}
//           className="w-full h-80 object-cover rounded-md"
//         />
//         <div>
//           <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
//           <p>Original Price: {product.originalPrice}</p>
//           <p>Resell Price: {product.resellPrice}</p>
//           <p>Years of Use: {product.yearsOfUse} years</p>
//           <p>Condition: {product.condition}</p>

//           <form onSubmit={handleBooking} className="mt-4">
//             <div className="mb-2">
//               <label className="block text-sm font-medium">Your Name</label>
//               <input
//                 type="text"
//                 className="w-full border px-3 py-2 rounded-md"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-sm font-medium">Your Email</label>
//               <input
//                 type="email"
//                 className="w-full border px-3 py-2 rounded-md"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
//             >
//               Book Product
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     <Laptop></Laptop>
//    </div>
//   );
// };

// export default ProductDetails;


import React, { useState } from "react";

const ProductDetails = ({ product, onBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Product booked successfully by ${name}!`);
  };

  return (
    <div className="p-4">
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={onBack}
      >
        Back
      </button>
      <div className="grid md:grid-cols-2 gap-4">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-80 object-cover rounded-md"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p>Original Price: {product.originalPrice}</p>
          <p>Resell Price: {product.resellPrice}</p>
          <p>Years of Use: {product.yearsOfUse} years</p>
          <p>Condition: {product.condition}</p>

          <form onSubmit={handleBooking} className="mt-4">
            <div className="mb-2">
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Your Email</label>
              <input
                type="email"
                className="w-full border px-3 py-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Book Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
