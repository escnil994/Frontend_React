import React from 'react';
import AppCreateComment from '../comments/CreateComment';

const AppFooter = () => {
  return (
    <footer className="bg-dark bg-gradient text-center text-white">
      <div className="container p-4">
        <section>
          <AppCreateComment />
        </section>
      </div>

      <div className="text-center p-3 JetBrains" style={{ backgroundColor: 'rgba(20, 20, 20, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white" href="https://nilson-escobar.com/">nilson-escobar.com</a>
      </div>
    </footer>
  );
};

export default AppFooter;
