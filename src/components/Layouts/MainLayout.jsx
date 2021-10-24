import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOComponent from '@/components/SEOComponent';

const MainLayout = (props) => {
  return (
    <Fragment>
      <SEOComponent data={props.seoData} />
      <Header />
      <main className="w-full m-0 p-0 flex flex-1 flex-col relative">
        {props.children}
      </main>
      <Footer />
    </Fragment>
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
