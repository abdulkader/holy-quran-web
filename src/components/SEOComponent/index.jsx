import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const SEOComponent = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props?.data?.title}</title>
      <meta name="description" content={props?.data?.description} />
      <meta name="keywords" content={props?.data?.keywords} />
    </Helmet>
  );
};

SEOComponent.defaultProps = {
  data: {},
};

SEOComponent.propTypes = {
  data: PropTypes.object,
};

export default SEOComponent;
