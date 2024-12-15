import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Two header options with online image links
const headers = [
  {
    title: "CHICAGO DEEP",
    subtitle: "PIZZA KING",
    discription: "dummy text is used by many web-developers to test how their",
    button: "Order Now",
    image: "https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_2.png",
  },
  {
    title: "50% OFF",
    subtitle: "WELCOME FRESHEAT",
    discription: "dummy text is used by many web-developers to test how their",
    button: "Shop Now",
    image: "https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_1.png",
  },
  {
    title: "50% OFF",
    subtitle: "WELCOME FRESHEAT",
    discription: "dummy text is used by many web-developers to test how their",
    button: "Shop Now",
    image: "https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_3.png",
  },
];

const Header = () => {
  const [currentHeader, setCurrentHeader] = useState(0);

  // Auto-switch headers every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeader((prev) => (prev + 1) % headers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Common animation variants for consistent entry/exit
  const animationVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-gray-900 text-white p-4 z-20">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Brand</div>
          <div className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:text-orange-500">HOME</a>
            <a href="#about" className="hover:text-orange-500">ABOUT</a>
            <a href="#services" className="hover:text-orange-500">SERVICES</a>
            <a href="#contact" className="hover:text-orange-500">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Top Bar */}
      <div className="absolute top-14 left-0 w-full bg-red-600 p-2 text-white flex justify-between z-10">
        <div>09:00 am - 06:00 pm</div>
        <div>Follow Us: Facebook | Twitter | YouTube</div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentHeader}
          className="flex items-center justify-center w-full max-w-6xl px-10 space-x-10"
          {...animationVariants}
        >
          {/* Text Section */}
          <div className="text-white text-center md:text-left w-1/2">
            <motion.h2 
              className="text-orange-900  text-4xl mb-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {headers[currentHeader].subtitle}
            </motion.h2>
            <motion.h1 
              className="text-8xl md:text-6xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {headers[currentHeader].title}
            </motion.h1>
            <motion.discription
              className="mt-6  text-white  px-2 rounded-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {headers[currentHeader].discription}
            </motion.discription>
            <motion.button 
              className="mt-6 bg-red-600 text-white py-2 px-6 rounded-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {headers[currentHeader].button}
            </motion.button>
          </div>

          {/* Image Section */}
          <motion.img
            src={headers[currentHeader].image}
            alt="Pizza"
            className="w-1/2 h-auto object-contain drop-shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Header;
