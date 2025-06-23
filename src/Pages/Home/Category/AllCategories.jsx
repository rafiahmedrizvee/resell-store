import React, { useContext, useEffect, useState } from "react";
import { CartContextApi } from "../../../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllCategories = () => {
  const { handleAddToCart } = useContext(CartContextApi);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    userName: "",
    email: "",
    location: "",
    phoneNumber: "",
  });

  useEffect(() => {
    fetch("allCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleViewDetails = (category) => {
    setSelectedCategories(category);
  };

  const handleBackToList = () => {
    setSelectedCategories(null);
  };

  const handleBooking = () => {
    toast.success("Booking successfully completed!");
    setShowModal(false);
    handleAddToCart(selectedCategories);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  return (
    <div className="mt-[20px] md:mt-[40px] mb-[20px] flex justify-center">
      <ToastContainer />

      {selectedCategories && (
        <div className="w-full max-w-2xl bg-base-100 shadow-xl p-5">
          <img
            src={selectedCategories.img}
            alt={selectedCategories.name}
            className="rounded-lg mb-5"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedCategories.name}</h2>
          <h2 className="text-2xl font-semibold mb-3">Category: {selectedCategories.category}</h2>
          <p className="mb-2 font-semibold">Details: {selectedCategories.details}</p>
          <p className="mb-2 font-semibold">Seller: {selectedCategories.sellerName}</p>
          <p className="mb-2 font-semibold">Location: {selectedCategories.location}</p>
          <p className="mb-2 font-semibold">Years of Uses: {selectedCategories.yearsOfUse} Years</p>
          <p className="mb-2 font-semibold">
            Original Price:{" "}
            <span className="line-through"> {selectedCategories.originalPrice}.00 TK</span>
          </p>
          <p className="mb-4 text-primary font-bold">
            Resell Price:  {selectedCategories.resellPrice}.00 TK
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="btn bg-black text-white hover:bg-red-500"
            >
              Book Now
            </button>
            <button
              onClick={handleBackToList}
              className="btn bg-gray-300 hover:bg-gray-400"
            >
              Back to List
            </button>
          </div>
        </div>
      )}

      {!selectedCategories && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-md mx-0 bg-base-100 hover:shadow-2xl group relative md:w-[200px] xl:h-[450px] xl:w-[300px]"
            >
              <figure>
                <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
                  <img
                    className="h-[130px] md:h-[260px] cursor-pointer w-full object-contain relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                    src={category.img || "notFoundImg.png"}
                    onError={(e) => {
                      e.target.onError = null;
                      e.target.src = "notFoundImg.png";
                    }}
                    alt={category.details ? category.name : ""}
                  />
                </div>
              </figure>
              <div className="flex justify-center text-center my-3">
                <div className="max-w-xs overflow-hidden text-ellipsis px-2">
                  <h4 className="font-semibold">{category.name}</h4>
                  
                  <p className="truncate">Seller: {category.sellerName}</p>
                  <p className="truncate">Location: {category.location}</p>
                 
                  <div className="md:flex justify-center items-center xl:gap-3">
                    <p className="font-semibold text-xl line-through text-[#969696]">
                      $ {category.originalPrice}.00
                    </p>
                    <p className="font-semibold text-xl text-red-500">
                      $ {category.resellPrice}.00
                    </p>
                  </div>
                  <div className="card-actions justify-center">
                    <button
                      onClick={() => handleViewDetails(category)}
                      className="btn rounded-sm sm:w-[150px] md:w-[230px] lg:w-[450px] xl:w-[450px] 2xl:w-[450px] mt-3 text-[19px] xl:text-xl hover:bg-blue-500 bg-black text-white"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
            <div className="mb-4">
              <input
                type="text"
                name="userName"
                placeholder="Your Name"
                className="input input-bordered w-full"
                value={bookingDetails.userName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                value={bookingDetails.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
                value={bookingDetails.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="input input-bordered w-full"
                value={bookingDetails.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleBooking}
                className="btn bg-blue-500 text-white"
              >
                Confirm Booking
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="btn bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCategories;
