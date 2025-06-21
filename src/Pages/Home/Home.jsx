import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider/ImageSlider';

import Mobile from '../Mobile/Mobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Product from './Products/Product';




const Home = () => {
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

                
                <div>
                        <ImageSlider></ImageSlider>

                        <Product></Product>
                    
                    
                        <h2 className="text-3xl font-bold text-center">Smartphone</h2>
                        <div className='pt-0'>
                               
                                <Mobile></Mobile>
                        </div>
                  
                        <h1>Home
                                
                        </h1>

                        <div>
                {/* Scroll to top button */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="flex justify-center items-center fixed bottom-12 right-12 p-3 h-[55px] object-cover w-[55px] bg-gray-300 font-bold hover:text-white  rounded-full shadow-lg hover:bg-black transition-all"
                    >
                        <FontAwesomeIcon className='w-9 h-5 font-bold' icon={faAngleUp} />
                    </button>
                )}
            </div>
                </div>
        );
};

export default Home;