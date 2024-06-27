import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AppBanner = () => {
  const location = useLocation();
  const [sliderName, setSliderName] = useState('Slider Name');

  useEffect(() => {
    const sliderNamesMap = {
      '/projects/get-all-projects': 'Projects',
      '/user/profile/get-escnil994-info': 'My Profile',
      '/user/profile/contact': 'Contact To Me',
    };

    const projectDetailPattern = /^\/projects\/get-project\/[a-f0-9]{24}\/(.+)$/;
    const match = location.pathname.match(projectDetailPattern);

    if (match) {
      setSliderName(decodeURIComponent(match[1]));
    } else {
      const currentSliderName = sliderNamesMap[location.pathname] || 'Not Found';
      setSliderName(currentSliderName);
    }
  }, [location.pathname]);

  return (
    <section className="wrap">
      <section id="info">
        <div id="banner">
          <AnimatePresence mode="wait">
            <motion.h1
              key={sliderName}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              {sliderName}
            </motion.h1>
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
};

export default AppBanner;
