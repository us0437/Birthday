import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BirthdayGiftApp = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [cakeCandles, setCakeCandles] = useState([true, true, true, true, true]);
  const [showConfetti, setShowConfetti] = useState(false);

  const sections = [
    {
      title: "Happy Birthday!",
      content: "I created something special just for you...",
      buttonText: "Begin the Journey"
    },
    {
      title: "Our Memories",
      content: "Remembering our special moments together",
      buttonText: "Continue"
    },
    {
      title: "For You",
      content: "A little message from my heart to yours",
      buttonText: "Make a Wish"
    },
    {
      title: "Make a Wish",
      content: "Blow out the candles on your birthday cake!",
      buttonText: "See Your Gift"
    },
    {
      title: "Happy Birthday!",
      content: "Wishing you the most amazing day filled with joy and love!",
      buttonText: "Start Again"
    }
  ];

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      setCurrentSection(0);
      setCakeCandles([true, true, true, true, true]);
      setShowConfetti(false);
    }
  };

  const blowCandle = (index: number) => {
    if (currentSection === 3) {
      const newCandles = [...cakeCandles];
      newCandles[index] = false;
      setCakeCandles(newCandles);
      
      if (newCandles.every(candle => !candle)) {
        setTimeout(() => {
          setShowConfetti(true);
          setTimeout(() => handleNext(), 2000);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (currentSection === 4) {
      const timer = setTimeout(() => {
        setShowConfetti(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-6"
          >
            {/* Welcome Section */}
            {currentSection === 0 && (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center"
                >
                  <span className="text-4xl text-white">🎁</span>
                </motion.div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{sections[0].title}</h1>
                <p className="text-gray-600 mb-8">{sections[0].content}</p>
              </div>
            )}

            {/* Memory Gallery Section */}
            {currentSection === 1 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sections[1].title}</h2>
                <p className="text-gray-600 mb-6">{sections[1].content}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg">
                    <img 
                      src="https://csciitd-my.sharepoint.com/:i:/g/personal/ch7210437_iitd_ac_in/EfLe0amWBHNFsP-lntl9sVgBCGXuMdvNKgIxQAMlZRbZZg?e=aWRYOg&download=1" 
                      alt="Romantic couple moment with beautiful sunset backdrop" 
                      className="w-full h-40 object-cover"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg">
                    <img 
                      src="https://csciitd-my.sharepoint.com/:i:/g/personal/ch7210437_iitd_ac_in/EbsfUeDvBYVBgmxg53MhXZkBT8a-VNOHi6rEHkQ1MxMZFw?e=5k7Rvt&download=1" 
                      alt="Couple sharing a joyful moment with genuine laughter and happiness" 
                      className="w-full h-40 object-cover"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg">
                    <img 
                      src="https://csciitd-my.sharepoint.com/:i:/g/personal/ch7210437_iitd_ac_in/EVJkdu-7_ghIjHP5hB03EcQB7Wms9Nxhz0ATx7LDz8s47g?e=fw3Zu5&download=1" 
                      alt="Romantic candlelit dinner atmosphere with intimate lighting" 
                      className="w-full h-40 object-cover"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg">
                    <img 
                      src="https://csciitd-my.sharepoint.com/:i:/g/personal/ch7210437_iitd_ac_in/EcpAG1AHHUBKo1CI33BHB70BZ0KZhyPe0iGjtZOdTwGlKA?e=5vlEbB&download=1" 
                      alt="Couple enjoying peaceful stargazing under the night sky" 
                      className="w-full h-40 object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            )}

            {/* Message Section */}
            {currentSection === 2 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sections[2].title}</h2>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl mb-6"
                >
                  <p className="text-lg text-gray-700 italic">
                    "Every day with you is a gift. Your smile brightens my world, your laughter is my favorite melody, 
                    and your heart is the most beautiful treasure. On your special day, I wish you all the happiness 
                    you bring to others returned to you tenfold. Happy birthday to the most amazing person I know! 💖"
                  </p>
                </motion.div>
                
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">💝</span>
                </div>
              </div>
            )}

            {/* Cake Section */}
            {currentSection === 3 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sections[3].title}</h2>
                <p className="text-gray-600 mb-6">Click on each candle to blow it out!</p>
                
                <div className="relative mb-8">
                  {/* Cake */}
                  <div className="w-48 h-32 mx-auto bg-gradient-to-r from-pink-400 to-purple-500 rounded-t-lg rounded-b-xl"></div>
                  
                  {/* Candles */}
                  <div className="absolute -top-8 left-0 right-0 flex justify-center space-x-6">
                    {cakeCandles.map((lit, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => blowCandle(index)}
                        className="cursor-pointer"
                      >
                        <div className="w-4 h-16 bg-yellow-300 mx-auto"></div>
                        {lit && (
                          <motion.div
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto -mt-3"
                          ></motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {showConfetti && (
                  <div className="fixed inset-0 pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                        initial={{
                          x: Math.random() * window.innerWidth,
                          y: -50,
                          scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                          y: window.innerHeight,
                          rotate: Math.random() * 360,
                          opacity: [1, 0]
                        }}
                        transition={{
                          duration: Math.random() * 2 + 1,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Final Section */}
            {currentSection === 4 && (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center"
                >
                  <span className="text-6xl text-white">🎂</span>
                </motion.div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{sections[4].title}</h1>
                <p className="text-gray-600 mb-8 text-lg">{sections[4].content}</p>
                
                {showConfetti && (
                  <div className="fixed inset-0 pointer-events-none">
                    {[...Array(100)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                        initial={{
                          x: Math.random() * window.innerWidth,
                          y: Math.random() * window.innerHeight,
                          scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                          y: window.innerHeight + 100,
                          rotate: Math.random() * 360,
                          opacity: [1, 0]
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Navigation Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              {sections[currentSection]?.buttonText || "Next"}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BirthdayGiftApp;
