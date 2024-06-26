import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AppBanner = () => {
  const location = useLocation();
  const [sliderName, setSliderName] = useState('Slider Name');

  useEffect(() => {
    switch (location.pathname) {
      case '/projects/get-all-projects':
        setSliderName('Projects List');
        break;
      case '/user/profile/get-escnil994-info':
        setSliderName('My Profile');
        break;
      case '/user/profile/contact':
        setSliderName('Contact To Me');
        break;
      default:
        setSliderName('Not Found');
    }
  }, [location.pathname]);

  return (
    <section className="wrap">
      <section id="info">
        <div id="banner">
          <h1>{sliderName}</h1>
        </div>
      </section>
    </section>
  );
};

export default AppBanner;
