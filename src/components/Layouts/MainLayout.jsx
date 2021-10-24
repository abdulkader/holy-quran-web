import React from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MainLayout = (props) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="w-full m-0 p-0 flex flex-1 flex-col">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

MainLayout.defaultProps = {
  seoData: {
    title: 'My App',
  },
};
MainLayout.propTypes = {
  seoData: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default MainLayout;
