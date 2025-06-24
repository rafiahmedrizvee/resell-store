import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContextApi } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";

const Mobile = () => {
  const { user } = useContext(AuthContext);
  const { handleAddToCart } = useContext(CartContextApi);
  const [mobiles, setMobiles] = useState([]);
  const [selectedMobiles, setSelectedMobiles] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    userName: "",
    email: "",
    location: "",
    phoneNumber: "",
  });

  useEffect(() => {
    fetch("https://resell-server-kappa.vercel.app/mobile")
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);

  const handleViewDetails = (mobile) => {
    setSelectedMobiles(mobile);
  };

  const handleBackToList = () => {
    setSelectedMobiles(null);
  };

  const handleBooking = () => {
    toast.success("Booking successfully completed!");
    setShowModal(false);
    handleAddToCart(selectedMobiles);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

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

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(inputValue)) {
      setValue(inputValue);
    }
  };
  return (
    <div className="mt-[100px] md:mt-[140px] mb-[100px] flex justify-center">
      <ToastContainer />

      {selectedMobiles && (
        <div className="w-full max-w-2xl bg-base-100 shadow-xl p-5">
          <img
            src={selectedMobiles.img}
            alt={selectedMobiles.name}
            className="rounded-lg mb-5"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedMobiles.name}</h2>
          <h2 className="text-2xl font-semibold mb-3">
            Category: {selectedMobiles.category}
          </h2>
          <p className="mb-2 font-semibold">
            Details: {selectedMobiles.details}
          </p>
          <p className="mb-2 font-semibold">
            Seller: {selectedMobiles.sellerName}
          </p>
          <p className="mb-2 font-semibold">
            Location: {selectedMobiles.location}
          </p>
          <p className="mb-2 font-semibold">
            Years of Uses: {selectedMobiles.yearsOfUse} Years
          </p>
          <p className="mb-2 font-semibold">
            Original Price:{" "}
            <span className="line-through">
              {" "}
              {selectedMobiles.originalPrice}.00 TK
            </span>
          </p>
          <p className="mb-4 text-primary font-bold">
            Resell Price: {selectedMobiles.resellPrice}.00 TK
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

      {!selectedMobiles && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
          {mobiles.map((mobile) => (
            <div
              key={mobile.id}
              className="rounded-md mx-0 bg-base-100 hover:shadow-2xl group relative md:h-[450px] md:w-[250px] xl:h-[450px] xl:w-[300px]"
            >
              <figure>
                <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
                  <img
                    className="h-[130px] md:h-[250px] cursor-pointer w-full object-contain relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                    src={mobile.img || "notFoundImg.png"}
                    onError={(e) => {
                      e.target.onError = null;
                      e.target.src = "notFoundImg.png";
                    }}
                    alt={mobile.details ? mobile.name : ""}
                  />
                </div>
              </figure>
              <div className="flex justify-center text-center my-3">
                <div className="max-w-xs overflow-hidden text-ellipsis px-2">
                  <h4 className="font-semibold">{mobile.name}</h4>

                  <p className="truncate">Seller: {mobile.sellerName}</p>
                  <p className="truncate">Location: {mobile.location}</p>

                  <div className="md:flex justify-center items-center xl:gap-3">
                    <p className="font-semibold text-xl line-through text-[#969696]">
                      TK{mobile.originalPrice}
                    </p>
                    <p className="font-semibold text-xl text-primary">
                      TK {mobile.resellPrice}
                    </p>
                  </div>
                  <div className="card-actions justify-center">
                    <button
                      onClick={() => handleViewDetails(mobile)}
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
        <div className="fixed inset-0 bg-secondary bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-center">
              Booking Details
            </h2>
            <div className="mb-1">
              <label
                for="name"
                className="block text-[15px] font-bold text-gray-700 m-1"
              >
                Seller Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                readOnly
                value={selectedMobiles.sellerName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-1">
              <label
                for="name"
                className="block text-[15px] font-bold text-gray-700 m-1"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                readOnly
                value={selectedMobiles.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-1">
              <label
                for="name"
                className="block text-[15px] font-bold text-gray-700 m-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                value={user?.email}
                readOnly
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-1">
              <label
                for="location"
                className="block text-[15px] font-bold text-gray-700 m-1"
              >
                Location
              </label>
              <input
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
                value={selectedMobiles.location}
                readOnly
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-1">
              <label
                for="name"
                className="block text-xl font-bold text-gray-700 m-1"
              >
                Resell Price
              </label>

              <span className="text-gray-500 mr-2 text-lg">TK</span>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter amount"
                readOnly
                value={selectedMobiles.resellPrice}
                className="flex-1 bg-transparent outline-none text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label
                for="name"
                className="block text-xl font-bold text-gray-700 m-1"
              >
                Mobile Number
              </label>
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
             <Link to="/orders" >
              <button
                onClick={handleBooking}
                className="btn bg-blue-500 text-white"
              >
                Confirm Booking
              </button></Link>
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

      <div>
        {/* Scroll to top button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="flex justify-center items-center fixed bottom-12 right-12 p-3 h-[55px] object-cover w-[55px] bg-gray-300 font-bold hover:text-white  rounded-full shadow-lg hover:bg-black transition-all"
          >
            <FontAwesomeIcon className="w-9 h-5 font-bold" icon={faAngleUp} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Mobile;
